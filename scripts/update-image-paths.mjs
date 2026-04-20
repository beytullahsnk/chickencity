// Update image path references in source code after WebP conversion.
// Replaces /images/**/*.{png,jpg,jpeg} → .webp, except for specific excluded paths
// that must keep their original extension.

import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC_DIR = resolve(ROOT, "src");

// Paths that must keep their original extension
const EXCLUDE = [
  "/images/og-image.jpg", // keep JPG for OG
  "/images/gallery/poulet.gif", // animated GIF, keep
];

/** Recursively walk src/ for .ts .tsx .js .jsx .md files */
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile() && /\.(ts|tsx|js|jsx|md|mdx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

/**
 * Replace image extensions within paths like "/images/.../xxx.png" → ".webp"
 * Skips EXCLUDE paths.
 */
function updateContent(content) {
  // Match paths inside string literals (", ', or `) that start with /images/ and end with png/jpg/jpeg
  const pattern = /(["'`])(\/images\/[^"'`]+?)\.(png|jpg|jpeg)\1/gi;
  return content.replace(pattern, (match, quote, path, ext) => {
    const fullOriginal = `${path}.${ext.toLowerCase()}`;
    if (EXCLUDE.some((e) => fullOriginal === e || fullOriginal.toLowerCase() === e.toLowerCase())) {
      return match;
    }
    return `${quote}${path}.webp${quote}`;
  });
}

async function main() {
  const files = await walk(SRC_DIR);
  let touched = 0;

  for (const f of files) {
    const content = await readFile(f, "utf8");
    const updated = updateContent(content);
    if (updated !== content) {
      await writeFile(f, updated, "utf8");
      touched += 1;
      console.log(`updated ${f.replace(ROOT + "/", "")}`);
    }
  }

  console.log(`\nTouched ${touched}/${files.length} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
