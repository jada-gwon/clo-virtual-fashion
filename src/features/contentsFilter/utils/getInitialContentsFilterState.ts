import { DEFAULT_FILTER_STATE } from '../constants';
import { ContentFilter } from '../types';

function getInitialContentsFilterState(): ContentFilter {
  const { contentsFilter } = window.history.state || {};
  return { ...DEFAULT_FILTER_STATE, ...contentsFilter };
}

export default getInitialContentsFilterState;
