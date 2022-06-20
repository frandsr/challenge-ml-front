export const getSearchParamsURlFromString = (query) => {
  let searchParams = new URLSearchParams({ search: query }).toString();
  return searchParams;
}

export const getQueryParamsURlFromString = (query) => {
  return new URLSearchParams({ q: query }).toString();
};