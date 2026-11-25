import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry — I hallucinated a calendar where the deadline was next Tuesday, and frankly the hallucinated one was better organised.";

// Gate: the sealed scorer requires UTF-8 text of 1 to 200 characters,
// not only white space, in a single line.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, gate requires 1-200`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
