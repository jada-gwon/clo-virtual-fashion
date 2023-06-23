import { Content } from '../types';

async function fetchContentsList(): Promise<Content[]> {
  const response = await fetch(
    'https://closet-recruiting-api.azurewebsites.net/api/data'
  );
  const data = await response.json();
  return data;
}
export default fetchContentsList;
