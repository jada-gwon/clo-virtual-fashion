import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectKeyword } from '../../selector';
import { updateKeyword } from '../../slice';

import { ReactComponent as IconSearch } from './icon-search.svg';
import { ReactComponent as IconClear } from './icon-x-circle.svg';

const KeywordSearch: React.FC = () => {
  const keyword = useSelector(selectKeyword);
  const dispatch = useDispatch();
  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateKeyword(e.target.value || ''));
  };
  const onClickClear = () => {
    dispatch(updateKeyword(''));
  };
  return (
    <label htmlFor="input-keyword">
      <div className="flex h-16 items-center rounded-xl bg-zinc-700 pr-4 text-white outline-cyan-300 focus-within:outline">
        <div className="p-5">
          <IconSearch />
        </div>
        <input
          className="flex-1 bg-transparent text-lg leading-none text-white outline-none"
          id="input-keyword"
          type="text"
          placeholder="Find items you're looking for"
          onChange={onChangeKeyword}
          value={keyword}
        />
        <div className="basis-16">
          {!!keyword && (
            <button type="button" onClick={onClickClear} className=" p-6">
              <IconClear />
            </button>
          )}
        </div>
      </div>
    </label>
  );
};

export default KeywordSearch;
