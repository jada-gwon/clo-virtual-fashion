import { configureStore } from '@reduxjs/toolkit';

import contentsFilterSlice from '@/features/contentsFilter/slice';
import { getInitialContentsFilterState } from '@/features/contentsFilter/utils';

const store = configureStore({
  reducer: {
    contentsFilter: contentsFilterSlice,
    test: contentsFilterSlice,
  },
  preloadedState: { contentsFilter: getInitialContentsFilterState() },
});

function mutateHistoryState() {
  const { contentsFilter = {} } = store.getState();
  window.history.replaceState(
    {
      contentsFilter,
    },
    ''
  );
}
store.subscribe(mutateHistoryState);

export default store;
export type RootState = ReturnType<typeof store.getState>;
