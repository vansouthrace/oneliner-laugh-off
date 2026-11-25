import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "I told my AI assistant to take the day off, so it scheduled a meeting about it.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);
