import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PricingOptions } from '../types';

const initialState: PricingOptions[] = [];

type UpdateFilterPayload = {
  option: PricingOptions;
  checked: boolean;
};

const pricingOptionsSlice = createSlice({
  name: 'pricingOptions',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<UpdateFilterPayload>) => {
      const { option, checked } = action.payload;
      if (checked) {
        return state.includes(option) ? state : [...state, option];
      }
      const index = state.indexOf(option);
      return index === -1
        ? state
        : [...state.slice(0, index), ...state.slice(index + 1)];
    },
    clearFilter: () => initialState,
  },
});

export default pricingOptionsSlice.reducer;
export const { updateFilter, clearFilter } = pricingOptionsSlice.actions;
