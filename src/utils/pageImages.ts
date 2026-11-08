import { EDITORIAL_WEBP_POOL } from '../config/siteMedia';

function hashKey(pageId: string): number {
  let h = 0;
  for (let i = 0; i < pageId.length; i++) h = (h * 31 + pageId.charCodeAt(i)) >>> 0;
  return h;
}

/** Returns `count` unique image URLs for one page (no duplicates within the page). */
export function allocatePageImages(pageId: string, count: number): string[] {
  const pool = EDITORIAL_WEBP_POOL;
  const start = hashKey(pageId) % pool.length;
  const out: string[] = [];
  for (let i = 0; i < count && i < pool.length; i++) {
    out.push(pool[(start + i) % pool.length]!);
  }
  return out;
}
