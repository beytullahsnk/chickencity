// Fix EXIF orientation on all WebP in public/images.
// Re-exports with .rotate() (auto-orient based on EXIF, then strip metadata).

import { readdir, rename } from "node:fs/promises";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const IMAGES_DIR = resolve(ROOT, "public/images");

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.isFile() && e.name.endsWith(".webp")) out.push(full);
  }
  return out;
}

const files = await walk(IMAGES_DIR);
let rotated = 0;
let stripped = 0;

for (const f of files) {
  try {
    const meta = await sharp(f).metadata();
    // orientation undefined or 1 = no rotation needed, just ensure EXIF stripped
    if (!meta.orientation || meta.orientation === 1) {
      // skip if no EXIF at all (nothing to strip)
      if (!meta.exif && !meta.icc && !meta.iptc && !meta.xmp) continue;
      const tmp = f + ".tmp";
      await sharp(f).webp({ quality: 85, effort: 6 }).toFile(tmp);
      await rename(tmp, f);
      stripped++;
      continue;
    }
    const tmp = f + ".tmp";
    await sharp(f).rotate().webp({ quality: 85, effort: 6 }).toFile(tmp);
    await rename(tmp, f);
    rotated++;
    console.log(`rotated ${f.replace(ROOT + "/", "")} (orientation was ${meta.orientation})`);
  } catch (err) {
    console.warn(`skip ${f.replace(ROOT + "/", "")}: ${err.message}`);
  }
}

console.log(`\nDone. Rotated ${rotated} files, stripped EXIF on ${stripped} more. Total scanned: ${files.length}.`);
