import { MouseEventHandler } from 'react';
import s from './PersonLinkBack.module.css';
import backImg from './img/back.png';
import { useNavigate } from 'react-router-dom';

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <a onClick={handleGoBack} className={s.link} href="#">
        <img className={s.link__img} src={backImg} alt="Go back" />
        <span>Go back</span>
      </a>
    </>
  );
};

export default PersonLinkBack;
