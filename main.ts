// Two Lines of Morning Light — entry program.
// Writes one original two-line micro poem (101 characters, including the
// line break) to /output/entry.txt. Node 22, standard library only.
// Deterministic: no network, no clock, no randomness; the text is a constant.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "A pale square of morning light climbs the bedroom wall",
  "and finds the photograph I meant to turn away.",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
