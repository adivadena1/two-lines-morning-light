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

// Self-check gate before writing: the bounty requires UTF-8 text of
// 1-120 characters (including the line break), exactly 2 lines, and more
// than whitespace. Fail loudly instead of writing an invalid entry.
const lineCount = POEM.split("\n").length;
const validUtf8 = Buffer.from(POEM, "utf8").toString("utf8") === POEM;
if (
  lineCount !== 2 ||
  POEM.length < 1 ||
  POEM.length > 120 ||
  POEM.trim().length === 0 ||
  !validUtf8
) {
  throw new Error(
    `Invalid poem: expected exactly 2 lines, 1-120 UTF-8 characters, ` +
      `non-blank text; got ${lineCount} line(s), ${POEM.length} ` +
      `character(s), valid UTF-8: ${validUtf8}.`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
