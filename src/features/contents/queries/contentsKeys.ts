import { ContentFilter } from '@/features/contentsFilter/types';

const contentKeys = {
  all: ['contents'],
  list: (filter: ContentFilter) => [...contentKeys.all, 'list', filter],
  infiniteList: (filter: ContentFilter) => [
    ...contentKeys.list(filter),
    'infinite',
  ],
};
export default contentKeys;
