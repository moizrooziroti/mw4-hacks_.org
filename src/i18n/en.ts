import type { Translations } from './types';
import { PRIMARY_BUY_URL } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import { blogPosts } from '../data/blog/posts';
import { EXTRA_WEBP, SITE_WEBP } from '../config/siteMedia';

const productBase = PRODUCT_BASE;

const blogItems = blogPosts.map((p) => ({
  tag: p.tag,
  title: p.title,
  slug: p.slug,
  image: p.image,
  desc: p.desc,
  date: p.date,
  readTime: p.readTime,
}));

export const en: Translations = {
  site: {
    name: 'MW4 Hacks',
    domain: 'mw4-hacks.org',
    title: 'MODERN WARFARE 4 HACKS | Buy MW4 Hacks 2026',
    description:
      'MODERN WARFARE 4 HACKS for PC — MW4 ESP, aimbot, wallhack software plus HWID spoofer, skin changer & Cloud DMA. Four products; Buy opens checkout.',
    discord: PRIMARY_BUY_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/articles/', label: 'Articles' },
    { href: '/forums/', label: 'Forums' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'PC · Modern Warfare 4',
    eyebrow: 'MODERN WARFARE 4 HACKS · PC · 2026',
    titleLine1: 'MODERN WARFARE 4',
    titleLine2: 'HACKS SOFTWARE · 2026',
    subtitle:
      'MODERN WARFARE 4 HACKS on PC: MW4 ESP for enemy and streak intel, aimbot-style assist for smoother tracking, and wallhack-style outlines through cover — the core software hacks bundle. When you need something else, the same site lists an MW4 HWID spoofer, a skin changer for camos, and Cloud DMA for a hardware read path. Pick a product card, read the articles, then Buy opens sponsored affiliate checkout in this tab. Third-party tools can violate game rules; account risk is on you.',
    ctaPrimary: 'See all hacks',
    ctaDiscord: 'Buy hacks now',
    modesLabel: 'Focus areas',
    modes: ['ESP', 'Aim assist', 'Wallhack-style', 'HWID · Skin · DMA'],
    metrics: [
      { label: 'Offers', strong: '4' },
      { label: 'Articles', strong: '15' },
      { label: 'Forum threads', strong: '36' },
      { label: 'Support', strong: 'FAQ' },
    ],
  },
  features: {
    eyebrow: 'What we cover',
    title: 'What you get with Modern Warfare 4 hacks',
    subtitle:
      'ESP, aim assistance, and wallhack-style visuals are the core buy. Spoofer, skin changer, and Cloud DMA sit beside them if you need that extra piece.',
    items: [
      {
        title: 'ESP & intel',
        subtitle: 'Read the round faster.',
        desc:
          'Extra labels for operators, gadgets, and distances—so you spend less time guessing rotations.',
        bullets: [
          'Tune color, distance, and opacity instead of turning on “everything.”',
          'Pair labels with sound so the overlay stays readable in a gunfight.',
        ],
        tags: ['MW4 ESP', 'MW4 overlay', 'gadget intel'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
        image: SITE_WEBP.zadeyoVisuals,
        imageAlt: 'Illustrative ESP / intel overlay — exact UI depends on your checkout listing.',
      },
      {
        title: 'Aim assistance',
        subtitle: 'Travel and acquisition.',
        desc:
          'Smoothing, FOV, bone priority—settings that change how your crosshair moves under stress.',
        bullets: [
          'Change one slider per session so you know what actually helped.',
          'Expect missed shots when ping or crosshair height is wrong.',
        ],
        tags: ['MW4 aimbot', 'smoothing', 'FOV'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
        image: SITE_WEBP.zadeyoAimbot,
        imageAlt: 'Illustrative aim-assist style menu — keys and ranges vary by seller.',
      },
      {
        title: 'Wallhack-style',
        subtitle: 'Geometry emphasis.',
        desc:
          'Outlines through cover trade GPU work for spatial certainty—thicken on dark sites, thin on bright ones.',
        bullets: ['Keep lines thin enough that you can still read the site.'],
        tags: ['MW4 wallhack', 'cover reads', 'verticality'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
        image: SITE_WEBP.levoVisuals,
        imageAlt: 'Illustrative visibility / geometry read — tune for your map pool.',
      },
      {
        title: 'HWID spoofer',
        subtitle: 'Hardware identity tooling.',
        desc:
          'For buyers researching identifier changes—scope only what the listing supports.',
        bullets: ['Different buy from the skin changer — read the HWID listing only for identifier tooling.'],
        tags: ['HWID', 'hardware', 'identifiers'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-3',
        image: SITE_WEBP.levoMisc,
        imageAlt: 'Hardware / system context for HWID tools — follow the product documentation.',
      },
      {
        title: 'Skin changer',
        subtitle: 'Loadout cosmetics.',
        desc:
          'Swap camos, operators, and blueprint looks when the listing supports Modern Warfare 4 — cosmetic-only, separate from ESP or aim modules.',
        bullets: ['Confirm the MW4 camo list on checkout before you buy.'],
        tags: ['camos', 'blueprints', 'cosmetic'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-3',
        image: SITE_WEBP.zadeyoMisc,
        imageAlt: 'Weapon camo and loadout customization — illustrative MW4 cosmetic preview.',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Separate hardware path.',
        desc:
          'Memory read at a distance—different cost and cabling than overlays.',
        bullets: ['Buy this when you want a hardware path, not the on-PC hacks loader.'],
        tags: ['Cloud DMA', 'memory read', 'hardware'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
        image: EXTRA_WEBP.r7,
        imageAlt: 'Separate machine / bridge path concept — confirm gear on the listing.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why read here first',
    title: 'Why mw4-hacks.org is the page to read first',
    subtitle:
      'Four MW4 products, each with a Buy button that opens the matching checkout. Read the page, then buy the hacks, the spoofer, skin changer, or Cloud DMA without hunting a random shop.',
    usLabel: 'This site',
    otherLabel: 'Typical hype',
    rows: [
      {
        title: 'No detection promises',
        desc: 'We don’t use “undetected,” “safe,” or anti-cheat bypass language.',
      },
      {
        title: 'Affiliate clarity',
        desc: 'Buy buttons are sponsored links to a partner checkout.',
      },
      {
        title: 'Four fixed destinations',
        desc: 'Hacks, spoofer, skin changer, Cloud DMA — mapped one-to-one.',
      },
      {
        title: 'Articles + forums',
        desc: 'Fifteen MW4 guides plus forum threads that point back to one of the four products.',
      },
      {
        title: 'Honest limitations',
        desc: 'Compatibility and availability change — we say so repeatedly.',
      },
      {
        title: 'Settings discipline',
        desc: 'Slow changes beat “max everything” profiles that feel good for ten minutes.',
      },
    ],
    metrics: [
      { value: '15', title: 'Articles', desc: 'Guides, glossaries, and checklists.' },
      { value: '36', title: 'Forum threads', desc: 'Reader questions and team answers.' },
      { value: '4', title: 'Products', desc: 'Hacks, spoofer, Skin changer, Cloud DMA.' },
    ],
  },
  setup: {
    eyebrow: 'Flow',
    titleLead: 'Pick the hack, open checkout in',
    titleHighlight: 'three steps',
    intro:
      'Choose ESP, aim assist, or wallhack-style hacks — or the spoofer, skin changer, or Cloud DMA — then hit Buy. The partner page is the live price and feature list.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Skim articles',
        desc: 'Read what ESP, aim assist, and wallhack-style tools actually do, then pick the card that matches.',
      },
      {
        step: 'Step 2',
        title: 'Pick one offer',
        desc: 'Open a product detail page — each has FAQs and related articles.',
      },
      {
        step: 'Step 3',
        title: 'Buy on checkout',
        desc: 'Use Buy (sponsored, same tab). Save confirmation email and docs.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Built for PC readers',
    subtitle:
      'Confirm OS and hardware on each listing — we keep site copy generic on purpose.',
    items: [
      'Windows 10/11 64-bit (verify on listing)',
      "The game's publisher / MW4 client updates",
      'Checkout documentation',
      'Affiliate support channels',
      'Optional DMA gear',
      'Forum search',
      'Articles index',
      'Risk disclosure in footer',
    ],
  },
  cheats: {
    eyebrow: 'Single bundle',
    title: 'Modern Warfare 4 hacks (ESP · aim assist · wallhack-style)',
    subtitle:
      'One card with the same price as the other three — details stay on the affiliate listing.',
    viewAll: 'View product',
    explore: 'Details',
    items: [],
  },
  products: {
    eyebrow: 'Products',
    title: 'Four Modern Warfare 4 offers',
    subtitle:
      'Hacks, HWID spoofer, Skin changer, and Cloud DMA — each card on mw4-hacks.org opens its own page, then Buy goes to checkout.',
    viewAll: 'View catalog',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Articles',
    title: 'MW4 hack guides',
    subtitle:
      'Modern Warfare 4 aimbot, ESP, wallhack, HWID spoofer, skin changer, and Cloud DMA — written for shoppers, not hype.',
    heroEyebrow: '2026 · Modern Warfare 4',
    heroTitle: 'MW4 hack guides &',
    heroHighlight: 'ranked topics',
    heroCopy:
      'Jump straight into what people search before checkout — aimbot tuning, ESP setup, wallhack readability, HWID spoofer basics, skin changer scope, DMA tradeoffs, and a buy checklist.',
    hooks: [
      {
        keyword: 'Modern Warfare 4 hacks',
        hook: 'How ESP, aim assist, and wallhack-style tools differ on PC.',
        href: '/articles/how-modern-warfare-4-hacks-work/',
        icon: 'crosshair',
      },
      {
        keyword: 'MW4 aimbot settings',
        hook: 'Fix missed shots, over-aim, and smoothing without guessing.',
        href: '/articles/mw4-aimbot-settings-and-overaim/',
        icon: 'softAim',
      },
      {
        keyword: 'MW4 ESP setup',
        hook: 'Cut overlay clutter and keep callouts readable in MW4 multiplayer lobbies.',
        href: '/articles/mw4-esp-customization-tips/',
        icon: 'featureEsp',
      },
      {
        keyword: 'MW4 wallhack config',
        hook: 'Line thickness and contrast when the map is bright or dark.',
        href: '/articles/mw4-wallhack-config-readability/',
        icon: 'mapHack',
      },
      {
        keyword: 'Buy MW4 hacks',
        hook: 'Payment safety, affiliate checkout, and terms risk in one list.',
        href: '/articles/buying-mw4-hacks-checklist/',
        icon: 'acqCheck',
      },
      {
        keyword: 'MW4 HWID spoofer',
        hook: 'When identifier tooling comes up — and what it is not.',
        href: '/articles/what-is-an-hwid-spoofer-for-mw4/',
        icon: 'shieldCheck',
      },
      {
        keyword: 'MW4 skin changer',
        hook: 'Camos and cosmetics only — separate from combat modules.',
        href: '/articles/mw4-skin-changer-explained/',
        icon: 'cosmetic',
      },
      {
        keyword: 'Cloud DMA MW4',
        hook: 'Memory-read path vs local overlays — latency and cost.',
        href: '/articles/what-is-cloud-dma-for-modern-warfare-4/',
        icon: 'layers',
      },
    ],
    latestTitle: 'All MW4 guides',
    latestSubtitle: 'Filter by topic or sort by date and reading length.',
    filterAll: 'All topics',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: blogItems,
  },
  toolkit: {
    eyebrow: 'Reading paths',
    title: 'Pick your lane',
    subtitle:
      'Match the article series to what you are buying — software overlays, skin changer cosmetics, or DMA hardware.',
    items: [
      {
        num: '01',
        label: 'Start',
        title: 'How hacks work',
        desc: '[Technical primer](/articles/how-modern-warfare-4-hacks-work/) without vendor jargon.',
      },
      {
        num: '02',
        label: 'Terms',
        title: 'ESP vs aim vs wallhack',
        desc: '[Disambiguation](/articles/mw4-esp-vs-aimbot-vs-wallhack/) before comparing listings.',
      },
      {
        num: '03',
        label: 'Buy',
        title: 'Checklist',
        desc: '[Questions to ask](/articles/buying-mw4-hacks-checklist/) before paying.',
      },
      {
        num: '04',
        label: 'Tune',
        title: 'Settings',
        desc: '[Slider vocabulary](/articles/mw4-cheat-settings-explained/) to avoid thrash.',
      },
      {
        num: '05',
        label: 'Hardware',
        title: 'HWID spoofer',
        desc: '[Definition](/articles/what-is-an-hwid-spoofer-for-mw4/) plus spoofer product page.',
      },
      {
        num: '06',
        label: 'DMA',
        title: 'Cloud path',
        desc: '[DMA intro](/articles/what-is-cloud-dma-for-modern-warfare-4/) and tradeoff article.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Workflow',
    badge: '4 steps',
    titleBefore: 'From reading to',
    titleHighlight: 'checkout',
    subtitle: 'Pause on each step—rushing configuration wastes money and time.',
    ctaLabel: 'Open products',
    ctaHref: productBase,
    ctaSecondary: 'Community Q&A',
    ctaSecondaryHref: '/forums/',
    items: [
      {
        num: '01',
        phase: 'Read',
        title: 'Articles first',
        desc: 'Especially risk and vocabulary pieces linked from the home page.',
      },
      {
        num: '02',
        phase: 'Compare',
        title: 'Pick one product',
        desc: 'Hacks vs spoofer vs skin changer vs Cloud DMA — different jobs.',
      },
      {
        num: '03',
        phase: 'Purchase',
        title: 'Affiliate checkout',
        desc: 'We may earn a commission — disclosure in footer.',
      },
      {
        num: '04',
        phase: 'After',
        title: 'Organize docs',
        desc: 'Save emails, versions, and uninstall notes in one folder.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Things players overlook',
    items: [
      {
        num: '01',
        title: 'Patch cadence',
        desc: 'Expect friction after seasons — vanilla night is valid.',
      },
      {
        num: '02',
        title: 'Account risk',
        desc: 'Terms of service still apply — no outcome guarantees.',
      },
      {
        num: '03',
        title: 'Forum tone',
        desc: "Forum posts on this domain discuss our four MW4 offers. They are not live publisher support tickets.",
      },
    ],
  },
  support: {
    eyebrow: 'Help',
    title: 'Support & resources',
    subtitle:
      'Orders are finished on the partner checkout. mw4-hacks.org support only covers this website: the four product pages, articles, and forums.',
    channels: [
      {
        icon: 'navProducts',
        title: 'Browse products',
        desc: 'Four cards with Buy + View — affiliate links only.',
        linkLabel: 'Open catalog',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Risk, affiliate disclosure, and definitions.',
        linkLabel: 'Read FAQ',
        href: '/faq/',
      },
      {
        icon: 'navBlog',
        title: 'Articles',
        desc: 'Long-form explainers — start with the featured article.',
        linkLabel: 'Browse setup guides',
        href: '/articles/',
      },
      {
        icon: 'messageCircle',
        title: 'Forums',
        desc: 'Search threads before asking in email.',
        linkLabel: 'Open community threads',
        href: '/forums/',
      },
    ],
    ticketTitle: 'If you email support',
    ticketItems: [
      { title: 'Offer name', desc: 'Which of the four products (hacks, spoofer, skin changer, DMA).' },
      { title: 'What you already tried', desc: 'Article or forum links you followed.' },
      { title: 'No payment disputes here', desc: 'We do not process cards — use checkout support for billing.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Risk, affiliates, and definitions',
    subtitle:
      'Third-party tools may violate Modern Warfare 4 terms and cause account restrictions. No detection or safety guarantees.',
    items: [
      { num: '01', q: 'Are Buy links affiliate?', a: 'Yes — sponsored outbound links; see Affiliate Disclosure.' },
      { num: '02', q: 'Do you claim tools are undetected?', a: 'No. We avoid stealth and bypass language entirely.' },
      { num: '03', q: 'Where are the four products?', a: '/products/ lists hacks, spoofer, Skin changer, and Cloud DMA.' },
    ],
  },
  reviews: {
    eyebrow: 'Reader notes',
    title: 'Checkout experiences',
    subtitle:
      'Buyer notes show up here only when we have permission to publish them. Until then, the four product pages are the place to buy.',
    emptyTitle: 'No published reviews yet',
    emptyBody:
      'mw4-hacks.org does not invent star ratings. Open a product and use Buy when you are ready to check out.',
  },
  footer: {
    tagline: 'Modern Warfare 4 hacks — ESP, aim assist, wallhack-style, HWID, skin changer, DMA. Affiliate links.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Home overview', ariaLabel: 'Home', scrollTarget: 'features' },
      { href: productBase, label: 'Products', ariaLabel: 'Products' },
      { href: '/articles/', label: 'Articles', ariaLabel: 'Articles' },
      { href: '/forums/', label: 'Forums', ariaLabel: 'Forums' },
      { href: '/faq/', label: 'FAQ', ariaLabel: 'FAQ' },
      { href: '/affiliate-disclosure/', label: 'Affiliate Disclosure', ariaLabel: 'Affiliate Disclosure' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
    affiliateNote:
      'Buy buttons are sponsored affiliate links: we may earn a commission when you complete checkout on the partner site.',
    riskNote:
      'Third-party tools can breach game terms — account restrictions are possible. Content here is informational, not a product warranty.',
  },
  legalPages: {
    affiliateDisclosure: {
      title: 'Affiliate Disclosure',
      description:
        'How sponsored Buy links on mw4-hacks.org work and how we are compensated.',
      sections: [
        {
          heading: 'Sponsored outbound links',
          paragraphs: [
            'This site lists four Modern Warfare 4 related offers. Buy buttons on product cards and in the header open a third-party checkout in a new browser tab.',
            'Those links are affiliate or sponsored links: if you complete a qualifying purchase, we may receive a commission at no extra cost to you.',
          ],
        },
        {
          heading: 'Who handles orders',
          paragraphs: [
            'Checkout, payment, delivery, refunds, and support are handled entirely by the partner site. mw4-hacks.org does not process your payment or access your order details.',
          ],
        },
        {
          heading: 'Editorial independence',
          paragraphs: [
            'Articles and forum threads are written for general education. They are not personalized advice and can change when the game or listings change.',
          ],
        },
        {
          heading: 'Price and availability',
          paragraphs: [
            'Commissions do not change the checkout price shown on the partner site. Listings, features, and refund rules can change without notice on mw4-hacks.org.',
            'If a Buy link fails, use the product page path from the nav catalog and try again later — we do not host the cart.',
          ],
        },
        {
          heading: 'Questions about this affiliate disclosure',
          paragraphs: [
            'This page summarizes how sponsored links work on mw4-hacks.org. It is not tax or legal advice; ask your advisor if you need formal disclosures for your own site.',
          ],
        },
        {
          heading: 'Tracking and cookies on checkout',
          paragraphs: [
            'Partner checkout sites may set their own cookies or analytics when you leave mw4-hacks.org. We do not control those tools — read the vendor privacy policy on the page where you pay.',
            'Bookmark the product URL on mw4-hacks.org if you need to return after a failed payment; we cannot recover carts from affiliate dashboards.',
          ],
        },
      ],
    },
    about: {
      title: 'About this site',
      description: 'Editorial Modern Warfare 4 hacks resource with affiliate purchases.',
      sections: [
        {
          heading: 'What we publish',
          paragraphs: [
            "mw4-hacks.org is an independent Modern Warfare 4 catalog: one hacks offer, one HWID spoofer, one Skin changer tool, and one Cloud DMA offer, plus original guides and forums written for those four pages. We are not affiliated with the game's publisher.",
            'Game names are used descriptively; trademarks belong to their owners.',
          ],
        },
        {
          heading: 'How purchases work',
          paragraphs: [
            'Buy buttons open partner checkout in the same browser tab. We may receive a commission — see Affiliate Disclosure.',
          ],
        },
        {
          heading: 'What we do not host',
          paragraphs: [
            'mw4-hacks.org does not run game servers, key databases, or card processing. If checkout fails, email us about the website; billing disputes stay with the partner.',
          ],
        },
        {
          heading: 'Other pages on this catalog',
          paragraphs: [
            'Read the [pre-checkout hacks checklist](/articles/buying-mw4-hacks-checklist/), [site support routing](/support/), [terms of use](/terms/), and [privacy policy](/privacy/) before you pay.',
          ],
        },
        {
          heading: 'Updates and accuracy',
          paragraphs: [
            'Product blurbs on mw4-hacks.org are edited notes, not live menus. When a Modern Warfare 4 patch ships, listings can change before we update an article — confirm features on checkout the day you buy.',
            'Forum threads are opinions from readers; they are not endorsements of any build or detection claim.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How mw4-hacks.org handles browsing data and contact messages.',
      sections: [
        {
          heading: 'Analytics',
          paragraphs: [
            'We may use privacy-respecting analytics to see which pages are read. You can block cookies in your browser.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'If you email support, we retain messages only as long as needed to respond.',
          ],
        },
        {
          heading: 'What we do not collect',
          paragraphs: [
            'We do not ask for your game login, payment card number, or order details on mw4-hacks.org. Checkout happens on the partner site under that vendor’s privacy terms.',
            'Support email is used only to reply about this website — product pages, guides, forums, or your privacy questions.',
          ],
        },
        {
          heading: 'Your choices',
          paragraphs: [
            'You can block or clear cookies in your browser, use a private window, or skip analytics-heavy networks when reading MW4 hack guides.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Using mw4-hacks.org and affiliate checkout links.',
      sections: [
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party software may violate game terms and lead to account restrictions. You accept that risk.',
          ],
        },
        {
          heading: 'Content',
          paragraphs: [
            'Articles and forums are informational. Vendor listings may change without our knowledge — rely on checkout text for features.',
          ],
        },
      ],
    },
    support: {
      title: 'Support',
      description: 'Help using this site — not order fulfillment.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Open checkout',
    browseCheatsMobile: 'Buy',
    homeAria: 'MW4 Hacks home',
    checkoutAria: 'Open affiliate checkout',
    discordAria: 'Purchase Modern Warfare 4 hacks',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
