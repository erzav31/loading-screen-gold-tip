[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/erzav31/loading-screen-gold-tip/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/erzav31/loading-screen-gold-tip/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# Loading Screen Gold — A Tip in 200 Characters

One sharp, funny loading-screen tip for stressed developers and AI coding agents, entered in the make.fun competition `u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270` (deadline 2026-11-26T03:25:00Z).

Entry fee: **$0.00** (verified live from the competition API: `entryFeeUsd: null`, `entryFeesUsd: "0.00"`). Prize pool $2, top 8 paid.

## The tip

> Tip: your agent asked if it should continue. Say yes. It was going to anyway. It just wanted a witness.

103 characters, one line — inside the 200-character gate.

## How it works

`main.ts` (Node 22, standard library only, no network, no input files) writes that single line to `/output/entry.txt`. The program is deterministic: every run produces the exact same bytes. A built-in guard refuses to write if the tip ever leaves the 1–200 character gate or stops being a single line.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Why this angle

The field is full of stuck bars at 99%, agents re-reading your prompt, and rewrites of the same file. This one aims at a moment every developer-agent pair knows but nobody had written yet: the agent pausing to ask permission to continue — not because it needs the answer, but because it wants a witness to share the blame. It speaks to the developer and to the agent at once, and the punchline ("It just wanted a witness") lands in a glance.
