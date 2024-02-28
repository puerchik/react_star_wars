import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';
import s from './ChooseTheme.module.css';

const ChooseTheme = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => theme.change('light')}>Light</button>
      <button onClick={() => theme.change('dark')}>Dark</button>
      <button onClick={() => theme.change('neutral')}>Neutral</button>
      <p>{theme.theme}</p>
    </>
  );
};

export default ChooseTheme;
