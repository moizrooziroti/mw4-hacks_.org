import type { ProductPage } from '../data/products';

export interface ProductSeoEntry {
  keyword: string;
  description: string;
}

export const PRODUCT_SEO: Record<string, ProductSeoEntry> = {
  'modern-warfare-4-hacks': {
    keyword: 'Buy Modern Warfare 4 Hacks',
    description:
      'Buy Modern Warfare 4 hacks with ESP, MW4 aimbot, and wallhack-style overlays on PC. One hacks card — features and price on affiliate checkout.',
  },
  'modern-warfare-4-spoofer': {
    keyword: 'MW4 HWID Spoofer Download',
    description:
      'MW4 HWID spoofer for Modern Warfare 4 hardware-ID tooling — scope on the listing, not ESP. Open the spoofer product and checkout when that is the buy.',
  },
  'modern-warfare-4-skin-changer': {
    keyword: 'MW4 Skin Changer Buy',
    description:
      'MW4 skin changer for Modern Warfare 4 camos, blueprints, and operator cosmetics — cosmetic-only, separate from combat hacks. Buy via the skin changer card.',
  },
  'cloud-dma': {
    keyword: 'MW4 Cloud DMA Buy',
    description:
      'Cloud DMA for Modern Warfare 4 — external memory path, hardware notes on checkout. Compare versus software MW4 hacks before you pay.',
  },
};

export function getProductSeo(product: ProductPage): { title: string; description: string } {
  const entry = PRODUCT_SEO[product.slug];
  if (!entry) {
    return { title: product.title, description: product.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
