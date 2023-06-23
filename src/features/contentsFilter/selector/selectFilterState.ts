import { RootState } from '@/store';

import { ContentFilter } from '../types';

const selectFilterState: (state: RootState) => ContentFilter = (state) =>
  state.contentsFilter;

export default selectFilterState;
