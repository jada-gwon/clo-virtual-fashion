import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PricingOptions, ContentFilter } from './types';
import { updatePricingOptions as getNextPricingOptions } from './utils';

const initialState: ContentFilter = {
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
    updateKeyword: ({ keyword, ...rest }, action: PayloadAction<string>) => ({
      ...rest,
      keyword: action.payload,
    }),
  },
});

export default contentsFilterSlice.reducer;
export const { updatePricingOptions, clearPricingOptions, updateKeyword } =
  contentsFilterSlice.actions;
