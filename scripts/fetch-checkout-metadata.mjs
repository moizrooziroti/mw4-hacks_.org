import fs from 'node:fs';
import path from 'node:path';

const products = [
  { id: 'cheats', url: 'https://zadeyo.com/products/mw4-cheats?aff=MOIZ' },
  { id: 'spoofer', url: 'https://zadeyo.com/products/hwid-spoofer?aff=MOIZ' },
  { id: 'skinChanger', url: 'https://zadeyo.com/products/skin-changer?aff=MOIZ' },
  { id: 'cloudDma', url: 'https://zadeyo.com/products/cloud-dma?aff=MOIZ' },
];

function strip(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
}

const out = {};
for (const p of products) {
  const r = await fetch(p.url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; mw4-hacks-build/1.0)' } });
  const html = strip(await r.text());
  const plain = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  out[p.id] = {
    status: r.status,
    url: r.url,
    title: (html.match(/<title>([^<]+)/) || [])[1]?.trim(),
    priceHints: [...new Set([...html.matchAll(/\$(\d+(?:\.\d{2})?)/g)].map((m) => m[0]))].slice(0, 8),
    headings: [...html.matchAll(/<h[23][^>]*>([^<]{4,140})<\/h[23]>/gi)]
      .map((m) => m[1].trim())
      .slice(0, 20),
    featureLines: [...plain.matchAll(/\b(ESP|Aimbot|Wallhack|Radar|Triggerbot|HWID|DMA|UGC|Spoofer|Visuals|Misc)\b[^.!?]{0,80}/gi)]
      .map((m) => m[0].trim())
      .slice(0, 12),
  };
  fs.writeFileSync(path.join('scripts', `checkout-${p.id}.snippet.txt`), plain.slice(0, 12000), 'utf8');
}

fs.writeFileSync('scripts/checkout-meta.json', JSON.stringify(out, null, 2), 'utf8');
console.log(JSON.stringify(out, null, 2));
