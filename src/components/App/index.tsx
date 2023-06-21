import React from 'react';

import ContentList from '../ContentList';
import KeywordSearch from '../KeywordSearch';
import PricingOptionsFilter from '../PricingOptionsFilter';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex h-12 items-center bg-black pl-4 text-2xl">👗</div>
      </header>
      <div className="container mx-auto">
        <aside>
          <div className="my-6">
            <KeywordSearch />
          </div>
          <div className="my-6">
            <PricingOptionsFilter />
          </div>
        </aside>
        <article>
          <ContentList />
        </article>
      </div>
    </>
  );
};

export default App;
