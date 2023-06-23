import React from 'react';

import { PricingOptions } from '@/features/contentsFilter/types';

import { Content } from '../../types';

type ContentPriceProps = Pick<Content, 'pricingOption' | 'price'>;
const ContentPrice: React.FC<ContentPriceProps> = ({
  pricingOption,
  price,
}) => {
  if (pricingOption === PricingOptions.VIEW_ONLY) {
    return <span>View Only</span>;
  }
  if (pricingOption === PricingOptions.FREE) {
    return <span>Free</span>;
  }
  return <span>{price}</span>;
};

export default ContentPrice;
