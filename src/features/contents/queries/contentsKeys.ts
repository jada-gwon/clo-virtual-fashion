import { ContentFilter } from '@/features/contentsFilter/types';

const contentKeys = {
  all: ['contents'],
  list: (filter: ContentFilter) => [...contentKeys.all, 'list', filter],
};
export default contentKeys;
