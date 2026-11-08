/**
 * One primary keyword + meta description per article URL (≤155 chars; no overlap with product H1 targets).
 */

export interface ArticleSeoEntry {
  keyword: string;
  description: string;
}

export const ARTICLE_SEO: Record<string, ArticleSeoEntry> = {
  'how-modern-warfare-4-hacks-work': {
    keyword: 'Modern Warfare 4 Hacks Explained | Full PC Buyer Guide 2026',
    description:
      'How Modern Warfare 4 hacks work: ESP, MW4 aimbot, wallhack loaders, and patches. Open our hacks product and buy on checkout.',
  },
  'mw4-esp-vs-aimbot-vs-wallhack': {
    keyword: 'MW4 ESP vs Aimbot vs Wallhack | Compare Feature Guide',
    description:
      'MW4 ESP vs aimbot vs wallhack before you pay on Modern Warfare 4. Compare listings and toggles, then buy from the MW4 hacks card.',
  },
  'how-to-choose-mw4-cheats': {
    keyword: 'MW4 Buy Guide 2026 | How to Choose ESP, Aimbot, DMA',
    description:
      'Choose MW4 Modern Warfare 4 hacks: software ESP and aimbot vs Cloud DMA. Pick one card on mw4-hacks.org, then open partner checkout.',
  },
  'mw4-cheat-settings-explained': {
    keyword: 'MW4 Hack Settings Guide',
    description:
      'MW4 hack settings: aimbot FOV, smoothing, bones, ESP distance. Confirm toggles on the Modern Warfare 4 hacks listing.',
  },
  'what-is-an-hwid-spoofer-for-mw4': {
    keyword: 'MW4 HWID Spoofer Meaning',
    description:
      'MW4 HWID spoofer meaning for Modern Warfare 4 PCs — not ESP. Open the spoofer product when that is the buy you need.',
  },
  'mw4-skin-changer-explained': {
    keyword: 'MW4 Skin Changer Guide',
    description:
      'MW4 skin changer: camos and cosmetics only on Modern Warfare 4. Use the skin changer product, not the combat hacks card.',
  },
  'what-is-cloud-dma-for-modern-warfare-4': {
    keyword: 'MW4 Cloud DMA Explained',
    description:
      'Cloud DMA for Modern Warfare 4: hardware path vs ESP loaders. Read tradeoffs, then open Cloud DMA checkout when it fits.',
  },
  'buying-mw4-hacks-checklist': {
    keyword: 'Hacks Checklist 2026 | Buy MW4 Safely on Partner Checkout',
    description:
      'Buy MW4 hacks safely with this hacks checklist: price, key delivery, refund wording, and account risk. Start on /products/, finish on partner checkout.',
  },
  'mw4-esp-customization-tips': {
    keyword: 'MW4 ESP Setup & Customization',
    description:
      'MW4 ESP setup: colors and distance caps for cleaner Modern Warfare 4 overlays. Buy ESP features from the MW4 hacks listing.',
  },
  'mw4-aimbot-settings-and-overaim': {
    keyword: 'Aimbot Settings for MW4 2026 | FOV, Smoothing & Ping',
    description:
      'Aimbot settings for missed shots on MW4: tighten FOV, smoothing, and ping habits before checkout. Match hacks listing vocabulary, then buy on partner site.',
  },
  'mw4-wallhack-config-readability': {
    keyword: 'MW4 Wallhack Settings',
    description:
      'MW4 wallhack config for readable lines on Modern Warfare 4 maps. Profile outlines, then confirm wallhack on checkout.',
  },
  'software-cheats-vs-cloud-dma-tradeoffs': {
    keyword: 'MW4 Software Hacks vs DMA',
    description:
      'Modern Warfare 4 software hacks vs Cloud DMA — cost and FPS. Pick MW4 hacks or Cloud DMA on mw4-hacks.org.',
  },
  'mw4-cheat-troubleshooting-basics': {
    keyword: 'MW4 Hack Not Working Fix',
    description:
      'MW4 hack not working after a patch? Display mode, admin rights, new builds. Re-check the hacks listing first.',
  },
  'mw4-cheat-performance-and-pc-load': {
    keyword: 'MW4 Hack FPS & Performance',
    description:
      'Modern Warfare 4 hack FPS: baseline, ESP load, capture apps. Choose software hacks or DMA, then buy the matching card.',
  },
  'mw4-cheat-vocabulary': {
    keyword: 'MW4 Hack Glossary',
    description:
      'MW4 hack glossary: ESP, aimbot, wallhack, HWID spoofer, Cloud DMA. Shop all four products on mw4-hacks.org.',
  },
};

export function getArticleSeo(
  slug: string,
  fallback: { title: string; desc: string },
): { title: string; description: string } {
  const entry = ARTICLE_SEO[slug];
  if (!entry) {
    return { title: fallback.title, description: fallback.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
