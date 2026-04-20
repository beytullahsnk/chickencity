// Convert all PNG/JPG/JPEG in public/images to WebP (higher quality kept),
// delete originals, and optionally generate an AVIF variant for very large images.
//
// Run: node scripts/optimize-images.mjs
// Flags:
//   --dry-run          : no file writes, just log what would happen
//   --keep-originals   : do not delete PNG/JPG after conversion
//   --skip-og          : do not regenerate /public/images/og-image.webp

import { readdir, stat, unlink } from "node:fs/promises";
import { resolve, join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const IMAGES_DIR = resolve(ROOT, "public/images");
const PUBLIC_DIR = resolve(ROOT, "public");

const FLAGS = new Set(process.argv.slice(2));
const DRY_RUN = FLAGS.has("--dry-run");
const KEEP = FLAGS.has("--keep-originals");
const SKIP_OG = FLAGS.has("--skip-og");

const CONVERTIBLE = new Set([".png", ".jpg", ".jpeg"]);

/** @param {string} dir */
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

function humanSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + " MB";
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + " KB";
  return bytes + " B";
}

async function convertFile(src) {
  const ext = extname(src).toLowerCase();
  if (!CONVERTIBLE.has(ext)) return null;

  const dst = src.slice(0, -ext.length) + ".webp";
  const { size: originalSize } = await stat(src);

  if (DRY_RUN) {
    console.log(`[dry] ${src} → ${dst} (${humanSize(originalSize)})`);
    return { src, dst, originalSize, newSize: 0 };
  }

  const quality = ext === ".png" ? 88 : 82;
  await sharp(src).webp({ quality, effort: 6 }).toFile(dst);

  const { size: newSize } = await stat(dst);

  // Note: AVIF sidecar generation désactivé — next/image se charge de servir de
  // l'AVIF à la volée (config `images.formats` dans next.config.ts) à partir du
  // WebP source. Conserver des .avif sur disque créait des désynchros après
  // rotations manuelles (le .webp était mis à jour mais le .avif restait vieux).

  if (!KEEP) await unlink(src);

  console.log(
    `  ${basename(src)} ${humanSize(originalSize)} → ${basename(dst)} ${humanSize(newSize)} (-${Math.round(100 - (newSize / originalSize) * 100)}%)`
  );
  return { src, dst, originalSize, newSize };
}

async function generateOgImage() {
  if (SKIP_OG) return;
  const dst = join(PUBLIC_DIR, "images/og-image.jpg");
  // logo.png may already be converted — try webp first
  const logoWebp = join(PUBLIC_DIR, "images/logo.webp");
  const logoPng = join(PUBLIC_DIR, "images/logo.png");
  let logoPath = logoPng;
  try { await stat(logoWebp); logoPath = logoWebp; } catch {}

  if (DRY_RUN) {
    console.log(`[dry] would generate ${dst}`);
    return;
  }

  // Resize logo to fit ~400px on a 1200x630 yellow background
  const logoBuffer = await sharp(logoPath)
    .resize({ width: 400, height: 400, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 255, g: 192, b: 69 }, // #ffc045
    },
  })
    .composite([{ input: logoBuffer, gravity: "center" }])
    .jpeg({ quality: 86 })
    .toFile(dst);

  const { size } = await stat(dst);
  console.log(`  generated og-image.jpg (${humanSize(size)})`);
}

async function main() {
  console.log(`Scanning ${IMAGES_DIR}…`);
  const files = await walk(IMAGES_DIR);
  console.log(`Found ${files.length} files`);

  let totalOrig = 0;
  let totalNew = 0;
  let converted = 0;

  for (const f of files) {
    try {
      const result = await convertFile(f);
      if (result) {
        totalOrig += result.originalSize;
        totalNew += result.newSize;
        converted += 1;
      }
    } catch (err) {
      console.warn(`  SKIP ${basename(f)}: ${err.message}`);
    }
  }

  console.log(`\nRe-generating og-image.jpg…`);
  await generateOgImage();

  console.log(
    `\nDone. Converted ${converted} files: ${humanSize(totalOrig)} → ${humanSize(totalNew)} (-${Math.round(100 - (totalNew / (totalOrig || 1)) * 100)}%)`
  );
  if (DRY_RUN) console.log("Dry run — no files changed.");
  if (KEEP) console.log("Originals kept (--keep-originals).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
