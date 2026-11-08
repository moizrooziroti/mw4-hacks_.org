/**
 * Replace user-facing cheat/cheats → hack/hacks across site copy.
 * Preserves: URL slugs, article paths, code keys (BUY_URLS.cheats), anti-cheat.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const SKIP_FILES = new Set([
  path.normalize('src/config/siteMedia.ts'),
  path.normalize('src/components/icons/types.ts'),
  path.normalize('src/components/icons/registry.ts'),
  path.normalize('src/i18n/types.ts'),
  path.normalize('scripts/checkout-meta.json'),
  path.normalize('scripts/fetch-checkout-metadata.mjs'),
  path.normalize('scripts/mw4-safe-replace.mjs'),
]);

const SCAN_DIRS = ['src', 'public', 'docs'].map((d) => path.join(ROOT, d));

const EXT = /\.(ts|astro|md|webmanifest|json|mjs)$/;

function matchCase(from, toSingular, toPlural) {
  const lower = from.toLowerCase();
  const isPlural = lower.endsWith('s');
  const target = isPlural ? toPlural : toSingular;
  if (from === from.toUpperCase()) return target.toUpperCase();
  if (from[0] === from[0].toUpperCase()) {
    return target[0].toUpperCase() + target.slice(1);
  }
  return target;
}

function transform(text) {
  const vault = [];
  const stash = (m) => {
    vault.push(m);
    return `\uE000${vault.length - 1}\uE001`;
  };

  // Code / config identifiers (not visible copy)
  text = text.replace(/BUY_URLS\.cheats/g, stash);
  text = text.replace(
    /\b(browseCheats|browseCheatsMobile|cheatPages|cheatTierIcons|cheatPath|navCheats|faqBlogVsCheats|faqPrivateCheats)\b/g,
    stash,
  );
  text = text.replace(/\bcheats:\s*\{/g, stash);
  text = text.replace(/product-cheat-page\.css/g, stash);
  text = text.replace(/id:\s*'cheats'/g, stash);
  text = text.replace(/CheatsSection/g, stash);

  text = text.replace(/anti-cheat/gi, stash);

  text = text.replace(/slug:\s*'[^']+'/g, stash);
  text = text.replace(/articlePath\('[^']+'\)/g, stash);
  text = text.replace(/^\s+'[^']*cheat[^']*':\s*\{/gm, stash);
  text = text.replace(/'(?:mw4-cheat[^']*|how-to-choose-mw4-cheats|software-cheats-vs-cloud-dma-tradeoffs)'/g, stash);

  text = text.replace(/\/articles\/[a-z0-9-]+/gi, stash);
  text = text.replace(/\/products\/[a-z0-9-]+\/?/gi, stash);

  text = text.replace(/\b(cheat|cheats)\b/gi, (m) => matchCase(m, 'hack', 'hacks'));

  for (let i = 0; i < vault.length; i++) {
    text = text.split(`\uE000${i}\uE001`).join(vault[i]);
  }
  return text;
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name === 'starwind') continue;
      walk(full, files);
    } else if (EXT.test(ent.name)) {
      files.push(full);
    }
  }
  return files;
}

let changed = 0;
for (const dir of SCAN_DIRS) {
  for (const file of walk(dir)) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    if (SKIP_FILES.has(rel)) continue;
  if (rel.includes('replace-cheats-to-hacks-copy')) continue;

    const before = fs.readFileSync(file, 'utf8');
    const after = transform(before);
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8');
      changed++;
      console.log('updated', rel);
    }
  }
}

console.log(`Done. ${changed} file(s) updated.`);
