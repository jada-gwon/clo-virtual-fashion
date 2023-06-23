import { ContentFilter } from '@/features/contentsFilter/types';

import { Content } from '../types';

function filterContentsList(list: Content[], filter: ContentFilter): Content[] {
  let result = list;
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
}
export default filterContentsList;
