import { useInfiniteQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { ContentsListPage } from '../types';
import { fetchContentsList } from '../utils';

import contentKeys from './contentsKeys';

function useContentsList(filter: ContentFilter) {
  return useInfiniteQuery<ContentsListPage>({
    queryKey: contentKeys.list(filter),
    queryFn: ({ pageParam = 0 }) => fetchContentsList(filter, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.pageInfo.hasNextPage
        ? lastPage.pageInfo.currentPage + 1
        : false;
    },
    cacheTime: Infinity,
    staleTime: 1000 * 60 * 5,
  });
}

export default useContentsList;
