import { ContentFilter, PricingOptions } from '@/features/contentsFilter/types';

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

  if (filter.pricingOptions.includes(PricingOptions.PAID)) {
    const [minPrice, maxPrice] = filter.priceRange;

    result = result.filter(
      (content) =>
        content.price >= minPrice ||
        (minPrice === 0 && content.pricingOption === PricingOptions.FREE)
    );

    if (maxPrice !== 999) {
      result = result.filter((content) => content.price <= maxPrice);
    }
  }

  return result;
}
export default filterContentsList;
