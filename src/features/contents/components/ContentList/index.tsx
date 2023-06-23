import React from 'react';
import { useSelector } from 'react-redux';

import selectFilterState from '@/features/contentsFilter/selector/selectFilterState';

import useContentsList from '../../queries/useContentsList';

const ContentList: React.FC = () => {
  const filterState = useSelector(selectFilterState);
  const { data: contents } = useContentsList(filterState);
  console.log(contents);
  return <>content list</>;
};

export default ContentList;
