import { useInfiniteQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';

import contentKeys from './contentsKeys';
import useAllContents from './useAllContents';

const LOAD = 12;

function useContentsList(filter: ContentFilter) {
  const { data } = useAllContents();
  return useInfiniteQuery<Content[]>({
    queryKey: contentKeys.filteredList(filter),
    queryFn: ({ pageParam = 0 }) =>
      data?.slice(pageParam * LOAD, (pageParam + 1) * LOAD) ?? [],
    getNextPageParam: (lastPage) =>
      lastPage.length === LOAD ? lastPage.length : false,
  });
}

export default useContentsList;
