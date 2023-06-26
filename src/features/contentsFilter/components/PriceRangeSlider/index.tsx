/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';

import './PriceRangeSlider.css';

const PRICE_MIN = 0;
const PRICE_MAX = 1000;

const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(PRICE_MIN);
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_MAX);
  const [minPercent, setMinPercent] = useState<number>(0);
  const [maxPercent, setMaxPercent] = useState<number>(100);

  const onChangeMinRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= maxPrice) {
      return;
    }
    setMinPrice(value);
    setMinPercent((value / PRICE_MAX) * 100);
  };

  const onChangeMaxRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= minPrice) {
      return;
    }
    setMaxPrice(value);
    setMaxPercent((value / PRICE_MAX) * 100);
  };

  return (
    <div className="flex items-center gap-1.5">
      <input
        type="number"
        className="price-range-slider__input"
        value={minPrice}
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
          min={PRICE_MIN}
          step={1}
          max={PRICE_MAX}
          value={minPrice}
          onChange={onChangeMinRange}
        />
        <input
          type="range"
          className="price-range-slider__slider__input absolute w-40"
          min={PRICE_MIN}
          step={1}
          max={PRICE_MAX}
          value={maxPrice}
          onChange={onChangeMaxRange}
        />
      </div>
      <input
        type="number"
        className="price-range-slider__input"
        value={maxPrice}
      />
    </div>
  );
};

export default PriceRangeSlider;
