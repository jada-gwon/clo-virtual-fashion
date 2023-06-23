import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  PricingOptionsFilter,
  KeywordSearch,
} from '@/features/contentsFilter/components';

import { ContentList } from '../../features/contents/components';

import './App.css';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <div className="flex h-12 items-center bg-black pl-4 text-2xl">👗</div>
      </header>
      <div className="container">
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
