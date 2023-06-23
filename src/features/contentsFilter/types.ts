export enum PricingOptions {
  PAID = 0,
  FREE = 1,
  VIEW_ONLY = 2,
}

export type ContentFilter = {
  pricingOptions: PricingOptions[];
  keyword: string;
};
