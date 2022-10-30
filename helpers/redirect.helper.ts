import Router from 'next/router';

export const dashboardRiderict = () => {
  Router.push('/');
};

export const loginRedirect = () => {
  Router.push('/auth/login');
};

export const verifyRedirect = () => {
  Router.push('/auth/verify');
};
