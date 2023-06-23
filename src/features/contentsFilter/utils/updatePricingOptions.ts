import { PricingOptions } from '../types';

function updatePricingOptions(
  oldOptions: PricingOptions[],
  option: PricingOptions,
  checked: boolean
): PricingOptions[] {
  if (checked) {
    return oldOptions.includes(option) ? oldOptions : [...oldOptions, option];
  }
  const index = oldOptions.indexOf(option);
  return index === -1
    ? oldOptions
    : [...oldOptions.slice(0, index), ...oldOptions.slice(index + 1)];
}

export default updatePricingOptions;
