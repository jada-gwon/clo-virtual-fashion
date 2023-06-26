import { ContentFilter } from './types';

export const PRICE_RANGE_MIN = 0;
export const PRICE_RANGE_MAX = 999;
export const DEFAULT_FILTER_STATE: ContentFilter = {
  pricingOptions: [],
  keyword: '',
  priceRange: [PRICE_RANGE_MIN, PRICE_RANGE_MAX],
};
