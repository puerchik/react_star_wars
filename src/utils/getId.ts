export const getUrlId = (url: string, separator: string) => {
  const res = url.slice(0, -1).split(separator)[1];

  return res;
};
