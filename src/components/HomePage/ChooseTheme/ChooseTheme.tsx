import { useContext } from 'react';
import { ThemeContext, Themes } from '../../../context/ThemeProvider';
import darkSide from './img/darkSide.jpg';
import lightSide from './img/lightSide.jpg';
import falcon from './img/falcon.jpg';
import s from './ChooseTheme.module.css';

type ChooseThemeItemProps = {
  onClick: () => void;
  text: string;
  img: string;
  classes: string;
};

type ThemeElement = {
  theme: Themes;
  text: string;
  img: string;
  classes: string;
};

type ThemeElements = ThemeElement[];

const ChooseThemeItem = ({ onClick, text, img, classes }: ChooseThemeItemProps) => (
  <div className={`${s.item} ${classes}`} onClick={onClick}>
    <img className={`${s.item_img} ${classes}`} src={img} alt={text} />
    <div className={`${s.item_header} ${classes}`}>{text}</div>
  </div>
);

const ChooseTheme = () => {
  const elements: ThemeElements = [
    {
      theme: 'light',
      text: 'Light Side',
      img: lightSide,
      classes: s.item__light,
    },
    {
      theme: 'dark',
      text: 'Dark Side',
      img: darkSide,
      classes: s.item__dark,
    },
    {
      theme: 'neutral',
      text: "I'm Han Solo",
      img: falcon,
      classes: s.item__neutral,
    },
  ];

  const themeContext = useContext(ThemeContext);

  return (
    <div className={s.container}>
      {elements.map(el => {
        return (
          <ChooseThemeItem
            key={el.theme}
            onClick={() => themeContext.change(el.theme)}
            text={el.text}
            img={el.img}
            classes={el.classes}
          />
        );
      })}
    </div>
  );
};

export default ChooseTheme;
