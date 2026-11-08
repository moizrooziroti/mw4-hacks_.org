import { t } from '../i18n';
import { buyUrlForSlug } from '../config/checkout';
import { EXTRA_WEBP, SITE_WEBP } from '../config/siteMedia';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Articles paired with each product detail page (slug under /articles/) */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  'modern-warfare-4-hacks': [
    'how-modern-warfare-4-hacks-work',
    'mw4-esp-vs-aimbot-vs-wallhack',
    'mw4-cheat-settings-explained',
    'mw4-esp-customization-tips',
    'mw4-aimbot-settings-and-overaim',
    'mw4-wallhack-config-readability',
    'buying-mw4-hacks-checklist',
    'how-to-choose-mw4-cheats',
  ],
  'modern-warfare-4-spoofer': [
    'what-is-an-hwid-spoofer-for-mw4',
    'mw4-cheat-troubleshooting-basics',
    'software-cheats-vs-cloud-dma-tradeoffs',
  ],
  'modern-warfare-4-skin-changer': [
    'mw4-skin-changer-explained',
    'how-to-choose-mw4-cheats',
    'buying-mw4-hacks-checklist',
  ],
  'cloud-dma': [
    'what-is-cloud-dma-for-modern-warfare-4',
    'software-cheats-vs-cloud-dma-tradeoffs',
    'mw4-cheat-performance-and-pc-load',
  ],
};

const productBase = '/products/';

/** Product galleries: primary SITE_WEBP stills plus a second Supabase still from EXTRA_WEBP (see siteMedia). */
const IMG = SITE_WEBP;

const mw4SystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: '64-bit Windows 10 or 11 (exact minimum build: confirm with checkout listing).' },
  { icon: 'reqSettings', text: 'Administrator or elevated install when the product documentation requires it.' },
  { icon: 'reqWifi', text: 'Stable connection for downloads, updates, and any cloud-linked workflows.' },
  { icon: 'reqCpu', text: 'Hardware that meets Modern Warfare 4 performance expectations for smooth play.' },
];

function slides(
  items: { src: string; alt: string; caption: string; captionDesc: string }[],
): ProductSlide[] {
  return items;
}

const acquisitionDefault = (productLabel: string): ProductAcquisition => ({
  title: `How access works — ${productLabel}`,
  steps: [
    {
      num: '01',
      title: 'Confirm scope on the checkout page',
      desc: 'Review what the listing includes, supported environment notes, and the risk disclosure before paying.',
    },
    {
      num: '02',
      title: 'Complete purchase',
      desc: 'Use the Buy button on this page. It opens the official checkout in a new tab.',
    },
    {
      num: '03',
      title: 'Follow delivery instructions',
      desc: 'Use the access steps provided after purchase. Keep installers and docs in one folder for support requests.',
    },
    {
      num: '04',
      title: 'Validate in a safe session first',
      desc: 'Test overlays or tools in a private or low-stakes session before relying on them under pressure.',
    },
  ],
});

export const productPages: ProductPage[] = [
  {
    slug: 'modern-warfare-4-hacks',
    kind: 'utility',
    badge: 'Core offer',
    category: 'Core product',
    name: 'Hacks',
    title: 'MODERN WARFARE 4 HACKS',
    subtitle: 'ESP, aim assistance, and wallhack-style visibility layers described in plain language — tuned for players comparing Modern Warfare 4 hacks before checkout.',
    desc: 'Modern Warfare 4 hacks for PC: ESP, aim assistance, and wallhack-style visuals. Buy opens the live module list.',
    features: [
      'Aim circle smoothing with FOV cap and team filters',
      'Player ESP: box, skeleton, health, armor, distance',
      '2D radar with range and zoom controls',
      'Hajin DMZ loot layer (off in 6v6) plus triggerbot',
    ],
    more: 0,
    variant: 'popular',
    buyUrl: buyUrlForSlug('modern-warfare-4-hacks'),
    images: slides([
      {
        src: IMG.zadeyoVisuals,
        alt: 'Modern Warfare 4 hack overlay — visuals emphasis (example capture)',
        caption: 'Visual overlay',
        captionDesc: 'Illustrative only; exact modules are on the checkout listing.',
      },
      {
        src: EXTRA_WEBP.r9,
        alt: 'Modern Warfare 4 tactical HUD / intel layer (illustrative)',
        caption: 'Intel layer',
        captionDesc: 'Second still — compare with listing screenshots before purchase.',
      },
    ]),
    overview: {
      title: 'What this bundle is for',
      paragraphs: [
        'Buy Modern Warfare 4 hacks here when you want ESP, aim assistance, and wallhack-style visuals in one menu. Hit Buy and the partner checkout lists the live modules, price, and delivery.',
        'Account risk is real and we do not claim a detection status. The point of this page is a clear path to the hacks, HWID spoofer, skin changer, or Cloud DMA — not a copied feature list from another brand.',
      ],
    },
    acquisition: acquisitionDefault('MW4 hacks'),
    goodToKnow:
      'On the hacks page, start with one profile. Confirm ESP, aim, and wallhack names on checkout before you treat a forum screenshot as the menu.',
    limitations:
      'The Modern Warfare 4 hacks offer on mw4-hacks.org can conflict with the game rules and can cost the account. We do not state a detection status. Modules can change after a MW4 update — checkout is the current list.',
    fullFeatures: [
      'Aimbot: circle FOV, smooth aim, bone selection, wall checks, teammate skip',
      'Triggerbot: delay, head/chest choice, hold key, same visibility rules',
      'Player visuals: corner box, skeleton, plates, weapon, squad colors, stream-proof',
      'Radar: operator markers, range, zoom',
      'DMZ loot: cash, bags, contracts, extracts, vehicles (disabled in 6v6)',
      'Misc: no-recoil, no-spread, dual saved configs, custom crosshair',
    ],
    systemRequirements: mw4SystemRequirements,
    about: [
      {
        type: 'p',
        text: 'If you are new to these categories, read [how MW4 hacks work](/articles/how-modern-warfare-4-hacks-work/) and [ESP vs aimbot vs wallhack](/articles/mw4-esp-vs-aimbot-vs-wallhack/) before buying.',
      },
    ],
    body: [
      { type: 'h2', text: 'How the pieces fit together' },
      {
        type: 'p',
        text: 'ESP answers “where” — gadgets, traps, and positions. Aim assistance answers “how fast you acquire the shot.” Wallhack-style modes stress what you can see through surfaces when the listing includes that behavior.',
      },
      {
        type: 'h2',
        text: 'After purchase',
      },
      {
        type: 'p',
        text: 'Delivery details, keys, and loaders live on the checkout side. Return here for [forum threads](/forums/) or [articles](/articles/) about settings and setup.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['modern-warfare-4-hacks'] ?? [],
  },
  {
    slug: 'modern-warfare-4-spoofer',
    kind: 'utility',
    badge: 'System',
    category: 'System utility',
    name: 'Spoofer',
    title: 'MW4 HWID spoofer',
    subtitle: 'Hardware identifier spoofing utilities for Modern Warfare 4 players replacing machines or following strict hardware checks — scope depends on the listing.',
    desc: 'MW4 HWID spoofer for Modern Warfare 4. It changes supported PC identifiers and is not the hacks menu.',
    features: [
      'HWID or component identifier handling (as described at checkout)',
      'Driver or cleanup steps if the listing includes them',
      'Post-change verification workflow when provided',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: buyUrlForSlug('modern-warfare-4-spoofer'),
    images: slides([
      {
        src: IMG.levoMisc,
        alt: 'PC hardware / system utilities context for HWID tooling (illustrative)',
        caption: 'System & identifiers',
        captionDesc: 'Illustrative — spoofer scope is defined at checkout.',
      },
      {
        src: EXTRA_WEBP.r3,
        alt: 'Windows / driver stack context for identifier tools (illustrative)',
        caption: 'Drivers & reboot',
        captionDesc: 'Follow vendor steps — this is not device-specific documentation.',
      },
    ]),
    overview: {
      title: 'When people look for a spoofer',
      paragraphs: [
        'Hardware bans and strict device ties are common search topics. A spoofer attempts to present different hardware identifiers to the platform when the product supports that workflow.',
        'This is not the same as an account appeal. Hardware identifiers and recovery paperwork are different problems — read the checkout scope before you buy.',
      ],
    },
    acquisition: acquisitionDefault('HWID spoofer'),
    goodToKnow:
      'The spoofer card is only for hardware-identifier scope written on its own listing. It is not the hacks menu and it is not an appeal.',
    limitations:
      'An HWID spoofer on mw4-hacks.org does not restore a Modern Warfare 4 account and does not add ESP. Platform rules still apply. Coverage is whatever that checkout page lists for Windows and reboot steps.',
    fullFeatures: [
      'Configurable identifier targets as listed',
      'Reboot or verification steps from documentation',
      'Compatibility notes for Windows builds on the checkout page',
    ],
    systemRequirements: mw4SystemRequirements,
    body: [
      { type: 'h2', text: 'Understand the limit' },
      {
        type: 'p',
        text: 'See [what an HWID spoofer is for Modern Warfare 4](/articles/what-is-an-hwid-spoofer-for-mw4/) for terminology. The checkout listing decides exact coverage — we do not invent chipset lists here.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['modern-warfare-4-spoofer'] ?? [],
  },
  {
    slug: 'modern-warfare-4-skin-changer',
    kind: 'utility',
    badge: 'Cosmetic',
    category: 'Cosmetic',
    name: 'Skin changer',
    title: 'MW4 Skin Changer',
    subtitle:
      'Modern Warfare 4 cosmetic tooling for weapon camos, blueprints, and operator looks — scope and limits come from the live checkout listing.',
    desc: 'MW4 skin changer for PC: swap camos and cosmetic loadout previews when the listing supports Modern Warfare 4.',
    features: [
      'Weapon camo and blueprint swaps (per checkout list)',
      'Operator / skin preview in menu where listed',
      'Cosmetic-only — separate from ESP or aimbot modules',
      'Saved loadout profiles when the product includes them',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: buyUrlForSlug('modern-warfare-4-skin-changer'),
    images: slides([
      {
        src: IMG.zadeyoMisc,
        alt: 'Modern Warfare 4 weapon camo menu — illustrative cosmetic preview',
        caption: 'Cosmetic menu',
        captionDesc: 'Illustrative — exact camo list is on checkout.',
      },
      {
        src: EXTRA_WEBP.r8,
        alt: 'Loadout customization screen context for MW4 (illustrative)',
        caption: 'Loadout view',
        captionDesc: 'Compare listing screenshots before you buy.',
      },
    ]),
    overview: {
      title: 'Cosmetics without combat modules',
      paragraphs: [
        'Skin changer tooling is for players who want loadout looks without opening the full hacks menu. What you can swap — camos, operators, attachments shown cosmetically — is defined on the partner listing.',
        'This is not the HWID spoofer and not Cloud DMA. Pair it with the [main hacks product](/products/modern-warfare-4-hacks/) only when you want both scopes.',
      ],
    },
    acquisition: acquisitionDefault('MW4 skin changer'),
    goodToKnow:
      'Start from one saved profile. Cosmetic changes can still violate platform rules — read the risk disclosure on checkout.',
    limitations:
      'The skin changer on mw4-hacks.org does not add ESP or aim assistance. Features and compatible Modern Warfare 4 modes are whatever the listing names today.',
    fullFeatures: [
      'Blueprint / camo categories listed at checkout',
      'Operator or weapon slot coverage as documented',
      'Profile save or reset when included',
      'Windows build notes from the listing',
    ],
    systemRequirements: mw4SystemRequirements,
    body: [
      { type: 'h2', text: 'Related reading' },
      {
        type: 'p',
        text: 'See [MW4 skin changer explained](/articles/mw4-skin-changer-explained/) for how cosmetics differ from combat overlays.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['modern-warfare-4-skin-changer'] ?? [],
  },
  {
    slug: 'cloud-dma',
    kind: 'utility',
    badge: 'Hardware path',
    category: 'DMA',
    name: 'Cloud DMA',
    title: 'Cloud DMA',
    subtitle: 'Cloud DMA for Modern Warfare 4 — memory read at distance with separate host gear, when the listing matches that architecture.',
    desc: 'Cloud DMA for Modern Warfare 4: a hardware read path, separate from the on-PC hacks loader.',
    features: [
      'DMA-style read path when listed',
      'Cloud-hosted or off-box processing if included',
      'Setup expectations separate from standard loaders',
    ],
    more: 0,
    variant: 'limited',
    buyUrl: buyUrlForSlug('cloud-dma'),
    images: slides([
      {
        src: IMG.levoVisuals,
        alt: 'Cloud DMA or external read path context (illustrative)',
        caption: 'Hardware path',
        captionDesc: 'Illustrative — bridge and cabling details are on the listing.',
      },
      {
        src: EXTRA_WEBP.r7,
        alt: 'Separate machine / bridge routing concept (illustrative)',
        caption: 'Off-PC read path',
        captionDesc: 'Confirm gear list and firmware on the checkout page.',
      },
    ]),
    overview: {
      title: 'Why DMA is a different conversation',
      paragraphs: [
        'Software overlays run alongside or inject into your game session in ways players often recognize first. DMA setups read memory through separate hardware paths — the tradeoff is cost, cabling, and learning curve.',
        'Read [what Cloud DMA is for Modern Warfare 4](/articles/what-is-cloud-dma-for-modern-warfare-4/) and compare [software vs DMA tradeoffs](/articles/software-cheats-vs-cloud-dma-tradeoffs/) before buying.',
      ],
    },
    acquisition: acquisitionDefault('Cloud DMA'),
    goodToKnow:
      'Cloud DMA is the only hardware-path offer here. Read the bridge and second-PC notes on its listing before comparing it to the software hacks card.',
    limitations:
      'Cloud DMA on mw4-hacks.org needs the gear the listing names. It is a different buy from the on-PC hacks loader. Account risk and patch breakage still exist; we do not claim a detection status.',
    fullFeatures: [
      'Hardware bridge requirements as listed',
      'Cloud or remote processing notes from documentation',
      'Installation sequence for firmware or devices if applicable',
    ],
    systemRequirements: mw4SystemRequirements,
    body: [
      { type: 'h2', text: 'Cross-check' },
      {
        type: 'p',
        text: 'If you only need overlays, the [main hacks product](/products/modern-warfare-4-hacks/) may fit better. DMA is for buyers who already understand the hardware story.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['cloud-dma'] ?? [],
  },
];

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: t.products.subtitle,
  buyUrl: buyUrlForSlug('modern-warfare-4-hacks'),
};

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}
