import { useInfiniteQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';

import contentKeys from './contentsKeys';
import useContentsList from './useContentsList';

const LOAD = 12;

function useInfiniteContentsList(filter: ContentFilter) {
  const { data } = useContentsList(filter);
  return useInfiniteQuery<Content[]>({
    queryKey: contentKeys.infiniteList(filter),
    queryFn: ({ pageParam = 0 }) =>
      data?.slice(pageParam * LOAD, (pageParam + 1) * LOAD) ?? [],
    getNextPageParam: (lastPage) =>
      lastPage.length === LOAD ? lastPage.length : false,
    enabled: !!data,
  });
}

export default useInfiniteContentsList;
