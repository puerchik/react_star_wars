export const changeCssVariables = (theme: string) => {
  const root = document.querySelector(':root') as HTMLElement;

  root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
};
