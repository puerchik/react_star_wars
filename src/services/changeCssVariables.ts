export const changeCssVariables = (theme: string) => {
  const root = document.querySelector(':root');
  const _root = document.styleSheets;

  console.log(_root, theme);
};
