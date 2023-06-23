import { useQuery } from '@tanstack/react-query';

import { Content } from '../types';
import { fetchContentsList } from '../utils';

import contentKeys from './contentsKeys';

function useAllContents() {
  return useQuery<Content[]>({
    queryKey: contentKeys.list(),
    queryFn: () => fetchContentsList(),
    cacheTime: Infinity,
    staleTime: 1000 * 60 * 60 * 24,
  });
}

export default useAllContents;
