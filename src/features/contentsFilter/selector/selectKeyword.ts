import { RootState } from '@/store';

const selectKeyword: (state: RootState) => string = (state) =>
  state.contentsFilter.keyword;

export default selectKeyword;
