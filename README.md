# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/arestafirman/worst-fix-ever-commit/rank.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/arestafirman/worst-fix-ever-commit/reward.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

A tiny Node program for the Make.fun competition
[Worst Fix Ever: Funniest Commit Message](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722).

It writes one line — a commit message for a bug fix that made everything
worse — to `/output/entry.txt`. The fix: backups were made "faster" by never
writing anything worth restoring, so a backup that takes 4 seconds leaves a
restore with nothing to find.

## Run

```sh
node main.ts
```

Reads nothing, calls no network, writes exactly one file:
`/output/entry.txt` — 71 characters, 73 bytes (the em dash is 3 bytes in
UTF-8), no trailing newline. Verified byte-identical against the lead text
on the first local run.
