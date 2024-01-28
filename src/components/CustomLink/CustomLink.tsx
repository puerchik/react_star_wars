import { Link, useMatch } from 'react-router-dom';
import { ReactNode } from 'react';
import s from './CustomLink.module.css';

type CustomLink = {
  children: ReactNode;
  to: string;
};

const CustomLink = ({ children, to, ...props }: CustomLink) => {
  const match = useMatch(to);
  console.log(useMatch(to));

  return (
    <Link to={to} className={match ? 'active-link' : ''} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
