// One-Sentence Absurd Invention Pitch
// Writes a single sentence pitching a ridiculous invention to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "A toaster that ejects your bread, inspects it like a disappointed art critic, and slides it back in for one more minute of silent judgement.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// The gate: /output/entry.txt must be UTF-8 text of 1 to 220 characters.
if (SENTENCE.length < 1 || SENTENCE.length > 220) {
  throw new Error(`entry must be 1-220 chars, got ${SENTENCE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, SENTENCE, "utf8");
console.log(`wrote ${SENTENCE.length} chars to ${outFile}`);
