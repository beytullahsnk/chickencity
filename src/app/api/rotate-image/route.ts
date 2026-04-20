import { NextResponse } from "next/server";
import { readFile, writeFile, unlink, rm } from "node:fs/promises";
import { resolve, extname } from "node:path";
import sharp from "sharp";

// Admin-only route — à supprimer avant mise en production
// (ou ajouter un check auth si on veut la garder).

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { path, angle } = body as { path: string; angle: number };

    if (!path || typeof path !== "string" || !path.startsWith("/images/")) {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 });
    }
    if (![90, -90, 180, 270, -180, -270].includes(angle)) {
      return NextResponse.json({ error: "Invalid angle" }, { status: 400 });
    }

    const abs = resolve(process.cwd(), "public" + path);
    const ext = extname(abs).toLowerCase();
    if (![".webp", ".png", ".jpg", ".jpeg", ".avif"].includes(ext)) {
      return NextResponse.json({ error: "Unsupported format" }, { status: 400 });
    }

    // Read to buffer first to avoid read/write same file issue
    const buf = await readFile(abs);
    let pipeline = sharp(buf).rotate(angle);

    // Re-encode in same format with reasonable quality
    if (ext === ".webp") pipeline = pipeline.webp({ quality: 85, effort: 6 });
    else if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9 });
    else if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 85 });
    else if (ext === ".avif") pipeline = pipeline.avif({ quality: 60 });

    const output = await pipeline.toBuffer();
    await writeFile(abs, output);

    // Drop any AVIF sidecar so Next regenerates
    const avifSidecar = abs.replace(/\.(webp|png|jpg|jpeg)$/i, ".avif");
    if (avifSidecar !== abs) {
      try { await unlink(avifSidecar); } catch {}
    }

    // Invalider le cache /_next/image pour que les pages publiques servent la
    // nouvelle version. Sans ça, Next garde jusqu'à 30j la version optimisée
    // pré-rotation (minimumCacheTTL dans next.config.ts).
    try {
      await rm(resolve(process.cwd(), ".next/cache/images"), {
        recursive: true,
        force: true,
      });
    } catch {
      // cache dir may not exist yet — ignore
    }

    return NextResponse.json({ ok: true, path, angle, size: output.length });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
