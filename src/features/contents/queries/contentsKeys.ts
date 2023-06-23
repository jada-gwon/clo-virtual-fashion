import { ContentFilter } from '@/features/contentsFilter/types';

const contentKeys = {
  all: ['contents'],
  list: () => [...contentKeys.all, 'list'],
  filteredList: (filter: ContentFilter) => [
    ...contentKeys.list(),
    { ...filter },
  ],
};
export default contentKeys;
