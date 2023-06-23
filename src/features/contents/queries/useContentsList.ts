import { useQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';
import { fetchContentsList } from '../utils';

import contentKeys from './contentsKeys';

function useContentsList(filter: ContentFilter) {
  return useQuery<Content[]>({
    queryKey: contentKeys.list(filter),
    queryFn: () => fetchContentsList(),
    select: (data) => {
      let result = data;
      if (filter.keyword) {
        result = result.filter(
          (content) =>
            content.title
              .toLocaleLowerCase()
              .includes(filter.keyword.toLocaleLowerCase()) ||
            content.creator
              .toLocaleLowerCase()
              .includes(filter.keyword.toLocaleLowerCase())
        );
      }
      if (filter.pricingOptions.length) {
        result = result.filter((content) =>
          filter.pricingOptions.includes(content.pricingOption)
        );
      }
      return result;
    },
    cacheTime: Infinity,
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
}

export default useContentsList;
