import fs from 'node:fs';
import path from 'node:path';

const pairs = [
  ['mw4-hacks.org', 'mw4-hacks.org'],
  ['Modern Warfare 4', 'Modern Warfare 4'],
  ['modern-warfare-4-hacks', 'modern-warfare-4-hacks'],
  ['modern-warfare-4-spoofer', 'modern-warfare-4-spoofer'],
  ['MODERN WARFARE 4 HACKS', 'MODERN WARFARE 4 HACKS'],
  ['MW4 HWID spoofer', 'MW4 HWID spoofer'],
  ['how-modern-warfare-4-hacks-work', 'how-modern-warfare-4-cheats-work'],
  ['mw4-esp-vs-aimbot-vs-wallhack', 'mw4-esp-vs-aimbot-vs-wallhack'],
  ['how-to-choose-mw4-cheats', 'how-to-choose-mw4-cheats'],
  ['mw4-cheat-settings-explained', 'mw4-cheat-settings-explained'],
  ['what-is-an-hwid-spoofer-for-mw4', 'what-is-an-hwid-spoofer-for-mw4'],
  ['what-is-cloud-dma-for-modern-warfare-4', 'what-is-cloud-dma-for-modern-warfare-4'],
  ['buying-mw4-hacks-checklist', 'buying-mw4-hacks-checklist'],
  ['mw4-esp-customization-tips', 'mw4-esp-customization-tips'],
  ['mw4-aimbot-settings-and-overaim', 'mw4-aimbot-settings-and-overaim'],
  ['mw4-wallhack-config-readability', 'mw4-wallhack-config-readability'],
  ['mw4-cheat-troubleshooting-basics', 'mw4-cheat-troubleshooting-basics'],
  ['mw4-cheat-performance-and-pc-load', 'mw4-cheat-performance-and-pc-load'],
  ['MW4 cheats', 'MW4 cheats'],
  ['MW4 cheat', 'MW4 cheat'],
  ['MW4 ESP', 'MW4 ESP'],
  ['MW4 aimbot', 'MW4 aimbot'],
  ['MW4 wallhack', 'MW4 wallhack'],
  ['MW4 cheats', 'MW4 cheats'],
  ['for Modern Warfare 4', 'for Modern Warfare 4'],
  ['in Modern Warfare 4', 'in Modern Warfare 4'],
  ['MW4 ', 'MW4 '],
  ['MW4-Hacks Team', 'MW4-Hacks Team'],
  ['MW4 Hacks', 'MW4 Hacks'],
  ['mw4-hacks', 'mw4-hacks'],
  ['the game's publisher', "the game's publisher"],
  ['listed', 'listed'],
  ['Listed', 'Listed'],
];

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'starwind') walk(p, acc);
    else if (/\.(ts|astro|mjs|json|css|txt)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const roots = [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'scripts'), path.join(process.cwd(), 'public')];
let n = 0;
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    let s = fs.readFileSync(file, 'utf8');
    const before = s;
    for (const [a, b] of pairs) s = s.split(a).join(b);
    if (s !== before) {
      fs.writeFileSync(file, s, 'utf8');
      n++;
    }
  }
}
console.log('Updated', n, 'files');
