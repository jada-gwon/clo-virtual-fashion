import { RootState } from '@/store';

import { PricingOptions } from '../types';

export const selectIsChecked = (option: PricingOptions) => (state: RootState) =>
  state.pricingOptions.includes(option);
