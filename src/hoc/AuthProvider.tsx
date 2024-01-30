import { createContext, useState } from 'react';
import { childrenProps } from './RequireAuth';

export type AuthContextType = {
  user: string | null;
  signin: (newUser: string, cb: () => void) => void;
  signout: (cb: () => void) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: childrenProps) => {
  const [user, setUser] = useState<string | null>(null);

  const signin = (newUser: string, cb: () => void) => {
    setUser(newUser);
    cb();
  };
  const signout = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value: AuthContextType = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
