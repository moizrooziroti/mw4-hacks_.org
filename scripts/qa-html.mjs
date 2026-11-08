import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const issues = [];

function walkHtml(dir, list = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtml(p, list);
    else if (ent.name.endsWith('.html')) list.push(p);
  }
  return list;
}

function routeFromFile(file) {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/index\.html$/, '')}`;
}

const files = walkHtml(dist);
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeFromFile(file);
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1];
  const h1s = [...html.matchAll(/<h1[\s>]/gi)];
  if (!title?.trim()) issues.push(`${route}: missing <title>`);
  if (!desc?.trim()) issues.push(`${route}: missing meta description`);
  if (h1s.length !== 1) issues.push(`${route}: h1 count=${h1s.length}`);
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
  for (const img of imgs) {
    if (!/\balt=/.test(img[0])) issues.push(`${route}: img missing alt: ${img[0].slice(0, 80)}`);
    else if (/\balt=""\b/.test(img[0]) || /\balt=''\b/.test(img[0]))
      issues.push(`${route}: img empty alt`);
  }
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://mw4-hacks.org', ''));
const builtRoutes = new Set(files.map(routeFromFile));
if (locs.length < builtRoutes.size - 2) {
  issues.push(`sitemap may be missing pages (sitemap=${locs.length}, html=${builtRoutes.size})`);
}
for (const loc of locs) {
  const norm = loc.endsWith('/') ? loc : `${loc}/`;
  if (!builtRoutes.has(norm) && loc !== '/rss.xml') issues.push(`sitemap loc not in dist: ${loc}`);
}

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!/Sitemap:\s*https:\/\/mw4-hacks\.org\/sitemap\.xml/.test(robots)) {
  issues.push('robots.txt sitemap line wrong');
}

console.log(`Checked ${files.length} HTML files, ${locs.length} sitemap URLs`);
if (issues.length === 0) {
  console.log('QA HTML: OK');
  process.exit(0);
}
console.log('QA HTML issues:\n' + issues.join('\n'));
process.exit(1);
