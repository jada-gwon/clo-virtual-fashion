import { useQuery } from '@tanstack/react-query';

import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';
import { fetchContentsList } from '../utils';

import contentKeys from './contentsKeys';

function useAllContents(filter: ContentFilter) {
  return useQuery<Content[]>({
    queryKey: contentKeys.list(filter),
    queryFn: () => fetchContentsList(),
    select: (data) => {
      let result = data;
      if (filter.keyword) {
        result = result.filter(
          (content) =>
            content.title.includes(filter.keyword) ||
            content.creator.includes(filter.keyword)
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
  });
}

export default useAllContents;
