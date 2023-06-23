function getInitialContentsFilterState() {
  const { contentsFilter } = window.history.state;
  return (
    contentsFilter ?? {
      pricingOptions: [],
      keyword: '',
    }
  );
}

export default getInitialContentsFilterState;
