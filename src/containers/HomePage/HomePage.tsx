import ChooseTheme from '../../components/HomePage/ChooseTheme';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className="header__text">Choose your side</h1>
      <ChooseTheme />
    </>
  );
};

export default HomePage;
