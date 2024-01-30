import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export type childrenProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: childrenProps) => {
  const location = useLocation();
  const auth = useAuth();

  if (auth) {
    const { user } = auth;
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  }

  return children;
};

export { RequireAuth };
