// worst-fix-ever-commit — writes one commit message to /output/entry.txt
// The fix: backups were made "faster" by never writing anything worth
// restoring. Speed was the bug; the restore is the punchline.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: backups now finish in 4 seconds — restores find nothing to restore";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, { encoding: "utf8" });

console.log(`wrote ${ENTRY.length} chars to ${outDir}/entry.txt`);
