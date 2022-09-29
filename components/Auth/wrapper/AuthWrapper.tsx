import React, { FC } from 'react';

type AuthPageWrapperType = {
  children: React.ReactNode;
};

const AuthWrapper: FC<AuthPageWrapperType> = ({ children }) => {
  return <div className="auth-wrapper bg-[#68c9e0] h-screen">{children}</div>;
};

export default AuthWrapper;
