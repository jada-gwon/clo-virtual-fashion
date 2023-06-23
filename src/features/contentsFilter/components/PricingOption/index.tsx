import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsChecked } from '../../hooks';
import { updatePricingOptions } from '../../slice';
import { PricingOptions } from '../../types';

type PricingOptionProps = {
  label: string;
  value: PricingOptions;
};

const PricingOption: React.FC<PricingOptionProps> = ({ label, value }) => {
  const isSelected = useSelector(selectIsChecked(value));
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePricingOptions({ option: value, checked: e.target.checked })
    );
  };

  return (
    <div>
      <label htmlFor={`pricing-option[${value}]`}>
        <input
          className="mr-1"
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
