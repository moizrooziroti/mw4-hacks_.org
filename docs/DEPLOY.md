# mw4-hacks.org deploy

Production is a **static Astro build** in `dist/`. Prefer **Cloudflare Workers (static assets)** — same pattern as your other domains.

**Temporary live URL (until `mw4-hacks.org` is attached):** https://mw4-hacks-org.moizrooziroti.workers.dev/

## Custom domain (fixes HTTP 500 on apex)

If `https://mw4-hacks.org/` returns **500** but `https://mw4-hacks-org.moizrooziroti.workers.dev/` works, the apex domain is still pointed at an old host (e.g. Railway). Fix:

1. Add **`mw4-hacks.org`** as a site in the same Cloudflare account you use for `wrangler deploy` (nameservers on the registrar must point to Cloudflare).
2. **Workers & Pages** → **`mw4-hacks-org`** → **Settings** → **Domains & Routes** → **Add** → `mw4-hacks.org` and `www.mw4-hacks.org`.
3. Remove or pause any Railway/Render service that used to serve this domain (stops conflicting origins).
4. Wait 1–5 minutes, then hard refresh the apex URL.

## Automatic CI (recommended)

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → worker **`mw4-hacks-org`** (must match `wrangler.toml` `name`).
2. Complete the custom domain steps above once.
3. In GitHub repo **Settings → Secrets and variables → Actions**, set:
   - `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit)
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push to `main` — workflow `.github/workflows/deploy.yml` runs `npm run build` then `wrangler deploy`.

## Manual from your machine

```bash
npm ci
npm run build
npx wrangler login
npm run deploy
```

## Railway / Nixpacks (optional)

`nixpacks.toml` still works: build phase runs `npm run build`, start runs `node scripts/serve.mjs`. Use this only if the domain points at Railway, not Workers. If you see **HTTP 500**, check deploy logs for **Missing dist/** (build failed) or crash on start.

## After deploy

- Hard refresh `https://mw4-hacks.org/`
- Run `node scripts/qa-html.mjs` locally before pushing
- Submit `https://mw4-hacks.org/sitemap.xml` in Search Console (see `docs/search-console.md`)
