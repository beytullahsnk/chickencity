import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const srcFiles = await walk(resolve(ROOT, "src"));
const paths = new Set();
for (const f of srcFiles) {
  const content = await readFile(f, "utf8");
  for (const m of content.matchAll(/["'`](\/images\/[^"'`]+)["'`]/g)) {
    paths.add(m[1]);
  }
}
console.log("Total referenced image paths:", paths.size);
const missing = [];
for (const p of paths) {
  try {
    await stat(resolve(ROOT, "public" + p));
  } catch {
    missing.push(p);
  }
}
console.log("Missing:", missing);
