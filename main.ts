import { mkdirSync, writeFileSync } from 'node:fs';

const LINE = 'My AI agent did all my work today, then asked me for a day off to recover from it.';

// The gate wants 1 to 200 characters of non-whitespace text; refuse loudly
// rather than writing an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error('line is ' + LINE.length + ' characters, outside the 1-200 gate');
}

const dir = process.env.OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(dir + '/entry.txt', LINE, 'utf8');
