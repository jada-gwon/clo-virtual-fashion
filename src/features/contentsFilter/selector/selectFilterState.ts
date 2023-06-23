import { RootState } from '@/store';

import { ContentFilter } from '../types';

const selectFilterState: (state: RootState) => ContentFilter = (
  state: RootState
) => state.contentsFilter;

export default selectFilterState;
