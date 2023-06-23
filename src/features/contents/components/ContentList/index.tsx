import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectFilterState } from '@/features/contentsFilter/selector';

import useContentsList from '../../queries/useContentsList';
import ContentItem from '../ContentItem';

const ContentList: React.FC = () => {
  const filterState = useSelector(selectFilterState);
  const {
    data: contents,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useContentsList(filterState);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) {
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [target, isFetchingNextPage, hasNextPage, fetchNextPage]);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2.5 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 xl:gap-x-10">
        {contents?.pages.map((page) =>
          page.data.map((content) => (
            <li key={content.id} className="pb-5 md:pb-8 lg:pb-10">
              <ContentItem content={content} />
            </li>
          ))
        )}
      </ul>
      <div ref={setTarget} />
    </>
  );
};

export default ContentList;
