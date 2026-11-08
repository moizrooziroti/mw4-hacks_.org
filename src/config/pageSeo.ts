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
    title: 'Modern Warfare 4 Hacks | Buy MW4 PC Software Pack 2026',
    description:
      'Modern warfare 4 hacks for PC: MW4 ESP, aimbot, wallhack, HWID spoofer, skin changer & Cloud DMA. Four cards; Buy opens checkout.',
  },
  '/products/': {
    title: 'Buy MW4 Hacks 2026 | Hacks, Spoofer & DMA',
    description:
      'Buy Modern Warfare 4 hacks: MW4 hacks bundle, HWID spoofer, skin changer, and Cloud DMA — compare four cards, then checkout on the partner site.',
  },
  '/articles/': {
    title: 'Guides 2026 | MW4 Hack Articles — Aimbot, ESP & DMA',
    description:
      'MW4 hack guides: aimbot settings, ESP setup, wallhack, HWID spoofer, skin changer, and DMA — then buy from the matching product card.',
  },
  '/forums/': {
    title: 'MW4 Hacks Forum 2026 | Aimbot & ESP Q&A Threads',
    description:
      'Modern Warfare 4 hacks forum: MW4 aimbot FOV, ESP clutter, wallhack lines, HWID spoofer, skin changer, and Cloud DMA threads on mw4-hacks.org.',
  },
  '/faq/': {
    title: 'Risk & MW4 Hacks FAQ 2026 | Aimbot, ESP & Accounts',
    description:
      'Modern Warfare 4 hacks FAQ: ESP vs aimbot terms, affiliate checkout, HWID spoofer scope, skin changer vs combat tools, and account-risk basics.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | mw4-hacks.org Commissions Policy',
    description:
      'Affiliate disclosure: mw4-hacks.org may earn commissions from qualifying purchases through sponsored Buy links; third-party checkout handles orders.',
  },
  '/terms/': {
    title: 'Terms & Conditions | mw4-hacks.org',
    description: 'Site terms, affiliate outbound links, and risk disclaimer for readers of mw4-hacks.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | mw4-hacks.org Data & Cookies',
    description:
      'Privacy: how mw4-hacks.org handles analytics, cookies, support messages, and what we retain when you browse MW4 product pages.',
  },
  '/about/': {
    title: 'Warfare 4 Catalog | Modern 4 Hacks Hub 2026',
    description:
      'Warfare 4 Catalog: About mw4-hacks.org — independent MW4 hacks, HWID spoofer, skin changer, Cloud DMA, plus guides and forums.',
  },
  '/support/': {
    title: 'MW4 Hacks Support | Site Help & Checkout',
    description:
      'Support for mw4-hacks.org readers: four MW4 products, hack guides, forums, and FAQ. Purchases complete on the partner checkout.',
  },
  '/blog/': {
    title: 'MW4 Hack Guides | Blog Archive on mw4-hacks.org',
    description:
      'Legacy blog URL for mw4-hacks.org. All Modern Warfare 4 hack guides, aimbot, ESP, and DMA articles are on the articles hub.',
  },
  '/forum/': {
    title: 'MW4 Hacks Forum Shortcut | Community Q&A',
    description:
      'Shortcut to the mw4-hacks.org forums — MW4 aimbot, ESP, wallhack, spoofer, skin changer, and Cloud DMA threads.',
  },
  '/contact/': {
    title: 'Contact mw4-hacks.org | Site Support Routing',
    description:
      'Contact routing for mw4-hacks.org. Website help only — billing and keys are handled on the partner checkout.',
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
