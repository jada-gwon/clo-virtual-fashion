import { configureStore } from '@reduxjs/toolkit';

import pricingOptionsSlice from '@/features/pricingOptions/slice/pricingOptionsSlice';

function getInitialState() {
  const { pricingOptions = [] } = window.history.state;
  return { pricingOptions };
}

const store = configureStore({
  reducer: {
    pricingOptions: pricingOptionsSlice,
  },
  preloadedState: getInitialState(),
});

function mutateHistoryState() {
  const { pricingOptions: pricingOptionsState } = store.getState();
  window.history.replaceState(
    {
      pricingOptions: pricingOptionsState,
    },
    ''
  );
}
store.subscribe(mutateHistoryState);

export default store;
export type RootState = ReturnType<typeof store.getState>;
