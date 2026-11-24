// Loading Screen Gold: A Tip in 200 Characters
// Entry program (program/v1): writes one loading-screen tip to /output/entry.txt.
// The tip is a fixed, original line written for this competition — no network,
// no randomness, no input files. The grader runs it twice; both runs must
// produce the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The tip: 103 characters, one line, no trailing newline — the judge reads
// the text exactly as submitted, so every byte is the tip itself. It speaks
// to the stressed developer AND to the AI coding agent at once — the agent
// that pauses to ask "should I continue?" is really asking for a witness
// to share the blame with.
const TIP =
  "Tip: your agent asked if it should continue. Say yes. It was going to anyway. It just wanted a witness.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters that is not only whitespace.
const chars = [...TIP].length;
if (chars < 1 || chars > 200 || TIP.trim().length === 0) {
  throw new Error(`tip is ${chars} characters; gate needs 1-200`);
}
if (TIP.includes("\n")) {
  throw new Error("tip must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
