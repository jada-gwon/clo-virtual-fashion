import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilterState } from '@/features/contentsFilter/selector';

import useInfiniteContentsList from '../../queries/useInfiniteContentsList';
import ContentItem from '../ContentItem';

const ContentList: React.FC = () => {
  const filterState = useSelector(selectFilterState);
  const { data: contents } = useInfiniteContentsList(filterState);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2.5 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 xl:gap-x-10">
      {contents?.pages.map((page) =>
        page.map((content) => (
          <li key={content.id} className="pb-5 md:pb-8 lg:pb-10">
            <ContentItem content={content} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContentList;
