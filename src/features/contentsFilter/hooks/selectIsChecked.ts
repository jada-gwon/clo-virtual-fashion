import { RootState } from '@/store';

import { PricingOptions } from '../types';

const selectIsChecked: (
  option: PricingOptions
) => (state: RootState) => boolean =
  (option: PricingOptions) => (state: RootState) =>
    state.contentsFilter.pricingOptions.includes(option);
export default selectIsChecked;
