import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateFilter } from '../../slice/pricingOptionsSlice';
import { selectIsChecked } from '../../slice/selector';
import { PricingOptions } from '../../types';

type PricingOptionProps = {
  label: string;
  value: PricingOptions;
};

const PricingOption: React.FC<PricingOptionProps> = ({ label, value }) => {
  const isSelected = useSelector(selectIsChecked(value));
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilter({ option: value, checked: e.target.checked }));
  };

  return (
    <div>
      <label htmlFor={`pricing-option[${value}]`}>
        <input
          id={`pricing-option[${value}]`}
          type="checkbox"
          value={value}
          checked={isSelected}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default PricingOption;
