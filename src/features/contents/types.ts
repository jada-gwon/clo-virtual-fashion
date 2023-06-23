import { PricingOptions } from '../contentsFilter/types';

export type Content = {
  id: string;
  creator: string;
  title: string;
  pricingOption: PricingOptions;
  imagePath: string;
  price: number;
};
