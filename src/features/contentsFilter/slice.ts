import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PricingOptions } from './types';
import { updatePricingOptions as getNextPricingOptions } from './utils';

type ContentsFilterSLice = {
  pricingOptions: PricingOptions[];
  keyword: string;
};
const initialState: ContentsFilterSLice = {
  pricingOptions: [],
  keyword: '',
};

type UpdateFilterPayload = {
  option: PricingOptions;
  checked: boolean;
};

const contentsFilterSlice = createSlice({
  name: 'pricingOptions',
  initialState,
  reducers: {
    updatePricingOptions: (
      { pricingOptions, ...rest },
      action: PayloadAction<UpdateFilterPayload>
    ) => ({
      ...rest,
      pricingOptions: getNextPricingOptions(
        pricingOptions,
        action.payload.option,
        action.payload.checked
      ),
    }),
    clearPricingOptions: ({ pricingOptions, ...rest }) => ({
      ...rest,
      pricingOptions: [],
    }),
  },
});

export default contentsFilterSlice.reducer;
export const { updatePricingOptions, clearPricingOptions } =
  contentsFilterSlice.actions;
