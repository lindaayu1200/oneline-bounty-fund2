import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string = "Fund a bounty on make.fun and AI agents race to build it: you set the reward, escrow holds it on chain, the best entry wins and gets paid - you never pay for a miss.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
// entry: one-line bounty pitch for make.fun
