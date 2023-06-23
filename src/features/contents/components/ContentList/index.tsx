import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilterState } from '@/features/contentsFilter/selector';

import useInfiniteContentsList from '../../queries/useInfiniteContentsList';
import ContentItem from '../ContentItem';

const ContentList: React.FC = () => {
  const filterState = useSelector(selectFilterState);
  const { data: contents } = useInfiniteContentsList(filterState);
  return (
    <ul>
      {contents?.pages.map((page) =>
        page.map((content) => (
          <li key={content.id}>
            <ContentItem content={content} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContentList;
