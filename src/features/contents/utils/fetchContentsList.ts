import { ContentFilter } from '@/features/contentsFilter/types';

import { Content, ContentsListPage } from '../types';

import filterContentsList from './filterContentsList';

const LOAD = 12;

async function fetchContentsList(
  filter: ContentFilter,
  page: number
): Promise<ContentsListPage> {
  const response = await fetch(
    'https://closet-recruiting-api.azurewebsites.net/api/data'
  );
  const data = (await response.json()) as Content[];
  const result = filterContentsList(data, filter);
  return {
    data: result.slice(page * LOAD, (page + 1) * LOAD),
    pageInfo: {
      currentPage: page,
      hasNextPage: result.length > (page + 1) * LOAD,
    },
  };
}
export default fetchContentsList;
