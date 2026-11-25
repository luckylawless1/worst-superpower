import * as fs from "node:fs";

// Worst Superpower — one line, at most 140 characters.
// The power is genuinely useless (it helps no one, not even the hero),
// instantly visual, and specific: rain, but only inside your own shoes.
const LINE = "I can summon rain, but only inside my own shoes.";

// Gate self-check: the sealed scorer requires /output/entry.txt to be
// UTF-8 text of 1 to 140 characters, not only white space, on one line.
// Fail loudly here rather than shipping an entry the gate would refuse.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
