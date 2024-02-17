import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useState } from 'react';
import Favorite from '../Favorite';

const Header = () => {
  return (
    <header className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/people/?page=1'}>People</NavLink>
        </li>
        <li>
          <NavLink to={'/not-found'}>Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </header>
  );
};

export default Header;
