/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PricingOptions, ContentFilter } from './types';

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
    clearPricingOptions: (state) => {
      state.pricingOptions = [];
    },
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export default contentsFilterSlice.reducer;
export const { updatePricingOptions, clearPricingOptions, updateKeyword } =
  contentsFilterSlice.actions;
