import { useContext } from 'react';
import s from './HomePage.module.css';
import { ThemeContext, Themes } from '../../context/ThemeProvider';

const HomePage = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h1 className="header__text">Home page</h1>
      <button onClick={() => theme.change('light')}>Light</button>
      <button onClick={() => theme.change('dark')}>Dark</button>
      <button onClick={() => theme.change('neutral')}>Neutral</button>
      <p>{theme.theme}</p>
    </>
  );
};

export default HomePage;
