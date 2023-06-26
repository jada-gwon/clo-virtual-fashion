/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useState, useDeferredValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PRICE_RANGE_MAX, PRICE_RANGE_MIN } from '../../constants';
import { selectFilterState } from '../../selector';
import { updatePriceRange } from '../../slice';
import { PricingOptions } from '../../types';

import './PriceRangeSlider.css';

const PriceRangeSlider: React.FC = () => {
  const dispatch = useDispatch();
  const { priceRange, pricingOptions } = useSelector(selectFilterState);
  const [minPrice, setMinPrice] = useState<number>(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState<number>(priceRange[1]);
  const deferredMinValue = useDeferredValue(minPrice);
  const deferredMaxValue = useDeferredValue(maxPrice);
  const minPercent = (minPrice / PRICE_RANGE_MAX) * 100;
  const maxPercent = (maxPrice / PRICE_RANGE_MAX) * 100;
  const enabled = pricingOptions.includes(PricingOptions.PAID);

  const onChangeMinRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > maxPrice) {
      return;
    }
    setMinPrice(value);
    // dispatch(updatePriceRange([value, maxPrice]);
  };

  const onChangeMaxRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < minPrice) {
      return;
    }
    setMaxPrice(value);
  };

  useEffect(() => {
    dispatch(updatePriceRange([deferredMinValue, deferredMaxValue]));
  }, [deferredMinValue, deferredMaxValue]);

  return (
    <div className={`flex items-center gap-1.5${enabled ? '' : ' opacity-30'}`}>
      <input
        type="text"
        className="price-range-slider__input"
        value={`$${minPrice}`}
        maxLength={3}
        disabled={!enabled}
      />
      <div className="price-range-slider__slider">
        <div className="relative">
          <div className="price-range-slider__slider__bg" />
          <div
            className="price-range-slider__slider__bar"
            style={{
              left: `${minPercent}%`,
              right: `${100 - maxPercent}%`,
            }}
          />
        </div>
        <input
          type="range"
          className="price-range-slider__slider__input absolute w-40"
          min={PRICE_RANGE_MIN}
          step={1}
          max={PRICE_RANGE_MAX}
          value={minPrice}
          onChange={onChangeMinRange}
          disabled={!enabled}
        />
        <input
          type="range"
          className="price-range-slider__slider__input absolute w-40"
          min={PRICE_RANGE_MIN}
          step={1}
          max={PRICE_RANGE_MAX}
          value={maxPrice}
          onChange={onChangeMaxRange}
          disabled={!enabled}
        />
      </div>
      <input
        type="text"
        className="price-range-slider__input"
        value={maxPrice === PRICE_RANGE_MAX ? `$${maxPrice}+` : `$${maxPrice}`}
        maxLength={3}
        disabled={!enabled}
      />
    </div>
  );
};

export default PriceRangeSlider;
