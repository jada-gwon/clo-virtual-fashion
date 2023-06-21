import React from 'react';

import { ReactComponent as IconSearch } from './icon-search.svg';

const KeywordSearch: React.FC = () => {
  return (
    <div className="flex h-16 items-center rounded-xl bg-zinc-700 pl-6 text-white outline-cyan-300 focus-within:outline">
      <input
        className="flex-1 bg-transparent text-lg leading-none text-white outline-none"
        type="text"
        placeholder="Find items you're looking for"
      />
      <div>
        <button type="button" className="h-full p-5">
          <IconSearch aria-label="search" />
        </button>
      </div>
    </div>
  );
};

export default KeywordSearch;
