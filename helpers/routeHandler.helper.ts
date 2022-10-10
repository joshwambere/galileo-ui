import Router from 'next/router';

export const changeRoute = (route: any) => {
  Router.replace(route);
};
