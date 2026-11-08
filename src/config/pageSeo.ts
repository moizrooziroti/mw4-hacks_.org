/**
 * Central titles/descriptions for high-traffic routes.
 * Titles target ≤60 characters; descriptions ≤155 where practical.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'MODERN WARFARE 4 HACKS | Buy MW4 Hacks 2026',
    description:
      'MODERN WARFARE 4 HACKS for PC — MW4 ESP, aimbot, wallhack software plus HWID spoofer, skin changer & Cloud DMA. Four products; Buy opens checkout.',
  },
  '/products/': {
    title: 'Buy MW4 Hacks 2026 | Hacks, Spoofer & DMA',
    description:
      'Buy Modern Warfare 4 hacks: MW4 hacks bundle, HWID spoofer, skin changer, and Cloud DMA — compare four cards, then checkout on the partner site.',
  },
  '/articles/': {
    title: 'MW4 Hack Guides 2026 | Aimbot, ESP & DMA',
    description:
      'MW4 hack guides: aimbot settings, ESP setup, wallhack, HWID spoofer, skin changer, and DMA — then buy from the matching product card.',
  },
  '/forums/': {
    title: 'MW4 Hacks Forum 2026 | Aimbot & ESP Q&A',
    description:
      'Modern Warfare 4 hacks forum: MW4 aimbot FOV, ESP clutter, wallhack lines, HWID spoofer, skin changer, and Cloud DMA threads on mw4-hacks.org.',
  },
  '/faq/': {
    title: 'MW4 Hacks FAQ | Aimbot, ESP & Account Risk',
    description:
      'Modern Warfare 4 hacks FAQ: ESP vs aimbot terms, affiliate checkout, HWID spoofer scope, skin changer vs combat tools, and account-risk basics.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | mw4-hacks.org',
    description:
      'mw4-hacks.org may earn commissions from qualifying purchases through sponsored Buy links; third-party checkout handles orders.',
  },
  '/terms/': {
    title: 'Terms & Conditions | mw4-hacks.org',
    description: 'Site terms, affiliate outbound links, and risk disclaimer for readers of mw4-hacks.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | mw4-hacks.org',
    description: 'How mw4-hacks.org handles analytics, cookies, and support messages.',
  },
  '/about/': {
    title: 'About MW4 Hacks | Modern Warfare 4 Catalog',
    description:
      'About mw4-hacks.org — an independent Modern Warfare 4 hacks catalog: MW4 hacks, HWID spoofer, skin changer, Cloud DMA, plus guides and forums.',
  },
  '/support/': {
    title: 'MW4 Hacks Support | Site Help & Checkout',
    description:
      'Support for mw4-hacks.org readers: four MW4 products, hack guides, forums, and FAQ. Purchases complete on the partner checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
