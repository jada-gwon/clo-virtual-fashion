import React from 'react';

import ContentItemSkeleton from '../ContentItemSkeleton';

const Skeleton: React.FC = () =>
  Array.from({ length: 4 }).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index} className="pb-5 md:pb-8 lg:pb-10">
      <ContentItemSkeleton />
    </li>
  ));
export default Skeleton;
