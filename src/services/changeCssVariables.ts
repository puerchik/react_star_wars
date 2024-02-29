export const changeCssVariables = (theme: string) => {
  const root = document.querySelector(':root') as HTMLElement;
  const cssVariables = ['header', 'bgimage'];

  cssVariables.forEach(el => {
    root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`);
  });
};
