/** Unified catalog price (monthly tier from partner checkout as of build). */
export const DISPLAY_PRICE_LABEL = '$35';

export type ProductPlanId = 'standard';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const singlePlan: ProductPlan[] = [
  { id: 'standard', label: 'Monthly access', priceUsd: 35, priceNote: 'Lifetime and other durations show on checkout.' },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return singlePlan;
}

export function formatPlanPrice(usd: number): string {
  return usd > 0 ? `$${usd}` : DISPLAY_PRICE_LABEL;
}

export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}
