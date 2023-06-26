/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  PRICE_RANGE_MAX,
  PRICE_RANGE_MIN,
  DEFAULT_FILTER_STATE,
} from './constants';
import { PricingOptions } from './types';

const initialState = DEFAULT_FILTER_STATE;

type UpdateFilterPayload = {
  option: PricingOptions;
  checked: boolean;
};

const contentsFilterSlice = createSlice({
  name: 'pricingOptions',
  initialState,
  reducers: {
    updatePricingOptions: (
      state,
      action: PayloadAction<UpdateFilterPayload>
    ) => {
      const { option, checked } = action.payload;
      const optionSet = new Set(state.pricingOptions);
      if (checked) {
        optionSet.add(option);
      } else {
        optionSet.delete(option);
      }
      state.pricingOptions = Array.from(optionSet);
      state.pricingOptions.sort();
    },
    updatePriceRange: (state, action: PayloadAction<[number, number]>) => {
      if (state.pricingOptions.includes(PricingOptions.PAID)) {
        state.priceRange = [...action.payload];
      }
    },
    clearPricingOptions: (state) => {
      state.pricingOptions = [];
      state.priceRange = [PRICE_RANGE_MIN, PRICE_RANGE_MAX];
    },
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export default contentsFilterSlice.reducer;
export const {
  updatePricingOptions,
  updatePriceRange,
  clearPricingOptions,
  updateKeyword,
} = contentsFilterSlice.actions;
