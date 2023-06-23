import { RootState } from '@/store';

const selectKeyword: (state: RootState) => string = (state: RootState) =>
  state.contentsFilter.keyword;

export default selectKeyword;
