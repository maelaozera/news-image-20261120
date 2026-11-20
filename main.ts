import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// This program copies the entry image into the output directory.
// It uses only the Node standard library and performs no network access,
// so running it twice always writes the same bytes.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy is complete: the output must be byte-identical to the
// source, so its size has to match exactly.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(`entry.png copy incomplete: ${targetBytes} of ${sourceBytes} bytes`);
}
console.log(`Wrote ${target} (${targetBytes} bytes)`);
