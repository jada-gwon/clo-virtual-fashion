import React from 'react';
import { useDispatch } from 'react-redux';

import { clearPricingOptions } from '../../slice';
import { PricingOptions } from '../../types';
import PricingOption from '../PricingOption';

const PricingOptionsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const onClickClear = () => dispatch(clearPricingOptions());

  return (
    <div className="flex gap-4 bg-zinc-900 p-6">
      <div>Pricing Options</div>
      <div className="flex gap-8">
        <PricingOption label="Paid" value={PricingOptions.PAID} />
        <PricingOption label="Free" value={PricingOptions.FREE} />
        <PricingOption label="View Only" value={PricingOptions.VIEW_ONLY} />
      </div>
      <div className="ml-auto">
        <button type="button" onClick={onClickClear}>
          reset
        </button>
      </div>
    </div>
  );
};

export default PricingOptionsFilter;
