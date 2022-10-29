import { createContext, useState } from 'react';
import { AuthContextType } from '../shared/types/auth.context.type';

const initialState: AuthContextType = {
  token: null,
  username: null,
  userId: null,
  profilePicture: null
};
const AuthContext = createContext<any>(initialState);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [authSate, setAuthState] = useState<AuthContextType>(initialState);
  const setAuthInfo = ({
    token,
    username,
    userId,
    profilePicture
  }: AuthContextType) => {
    localStorage.setItem(
      'auth',
      JSON.stringify({ token, username, userId, profilePicture })
    );
    setAuthState({ token, username, userId, profilePicture });
  };

  const checkAuth = () => {
    const authInfo = localStorage.getItem('auth');
    if (!authSate.token && !authInfo) {
      return false;
    }
  };
  return (
    <Provider
      value={{
        authSate,
        setAuthState: (userInfo: AuthContextType) => setAuthInfo(userInfo),
        checkAuth
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
