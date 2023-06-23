import { useInfiniteQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';

import contentKeys from './contentsKeys';
import useContentsList from './useContentsList';

const LOAD = 12;

type ContentsListPage = { data: Content[]; page: number };

function useInfiniteContentsList(filter: ContentFilter) {
  const { data } = useContentsList(filter);
  return useInfiniteQuery<ContentsListPage>({
    queryKey: contentKeys.infiniteList(filter),
    queryFn: ({ pageParam = 0 }) => ({
      data: data?.slice(pageParam * LOAD, (pageParam + 1) * LOAD) ?? [],
      page: pageParam,
    }),
    getNextPageParam: (lastPage) => {
      return lastPage.data.length === LOAD ? lastPage.page + 1 : false;
    },
    enabled: !!data,
  });
}

export default useInfiniteContentsList;
