import { ContentFilter } from '../types';

function getInitialContentsFilterState(): ContentFilter {
  const { contentsFilter } = window.history.state || {};
  return (
    contentsFilter ?? {
      pricingOptions: [],
      keyword: '',
    }
  );
}

export default getInitialContentsFilterState;
