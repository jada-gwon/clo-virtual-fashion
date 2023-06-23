import { useQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';
import { fetchContentsList, filterContentsList } from '../utils';

import contentKeys from './contentsKeys';

function useContentsList(filter: ContentFilter) {
  return useQuery<Content[]>({
    queryKey: contentKeys.list(filter),
    queryFn: () => fetchContentsList(),
    select: filterContentsList(filter),
    cacheTime: Infinity,
    staleTime: 1000 * 60 * 5,
  });
}

export default useContentsList;
