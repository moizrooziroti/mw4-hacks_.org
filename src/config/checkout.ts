/**
 * Affiliate purchase destinations (four products only).
 * These are the only allowed outbound purchase URLs site-wide.
 */
export const BUY_URLS = {
  hacks: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fmw4',
  spoofer: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fskin-changer',
  cloudDma: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fcloud-dma',
} as const;

export type BuyProduct = keyof typeof BUY_URLS;

/** Default header CTA — main hacks offer */
export const PRIMARY_BUY_URL = BUY_URLS.hacks;

/** Map product slug → buy URL */
/** Article slug → matching affiliate checkout (four products only). */
export function buyUrlForArticleSlug(slug: string): string {
  if (slug.includes('hwid-spoofer') || slug.includes('spoofer')) return BUY_URLS.spoofer;
  if (slug.includes('skin-changer')) return BUY_URLS.skinChanger;
  if (slug.includes('cloud-dma') || slug === 'software-cheats-vs-cloud-dma-tradeoffs') {
    return BUY_URLS.cloudDma;
  }
  return BUY_URLS.hacks;
}

export function buyUrlForSlug(slug: string): string {
  switch (slug) {
    case 'modern-warfare-4-hacks':
      return BUY_URLS.hacks;
    case 'modern-warfare-4-spoofer':
      return BUY_URLS.spoofer;
    case 'modern-warfare-4-skin-changer':
      return BUY_URLS.skinChanger;
    case 'cloud-dma':
      return BUY_URLS.cloudDma;
    default:
      return PRIMARY_BUY_URL;
  }
}

/** Legacy blog CTA hrefs → current affiliate URLs (if any old paths remain in content). */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }
  for (const url of Object.values(BUY_URLS)) {
    if (href === url || href.startsWith(`${url}&`)) return url;
  }
  return href;
}
