import { spawnSync } from 'node:child_process';

/** Production domain — change here when the live hostname changes. */
const WORKERS_ORIGIN = 'https://mw4-hacks.org';

process.env.PUBLIC_CANONICAL_ORIGIN = WORKERS_ORIGIN;

const result = spawnSync('npm run build', {
  shell: true,
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_CANONICAL_ORIGIN: WORKERS_ORIGIN },
});

process.exit(result.status ?? 1);
