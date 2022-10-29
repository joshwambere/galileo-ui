/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/redux/store';
import {
  removeCredentials,
  setCredentials
} from '../../shared/redux/slices/auth.slice';
import { BaseApi } from '../../services/api/api';
import { routes } from '../../config/router.config';
import { isValidToken } from '../../shared/utils/validations/jwt.validation';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { token } from '../../shared/types/token.types';

const PMPrivateRoute = (Wrapped: any) => {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);
    const localToken = localStorage.getItem('_galileo_tkn');

    if (!token && localToken) dispatch(setCredentials({ token: localToken }));

    if (!token && !localToken) {
      dispatch(removeCredentials());
      dispatch(BaseApi.util.resetApiState());
      router.replace(routes.login.url);
      return null;
    }
    if (
      (token && !isValidToken(token)) ||
      (localToken && !isValidToken(localToken))
    ) {
      dispatch(removeCredentials());
      dispatch(BaseApi.util.resetApiState());
      router.replace(routes.login.url);
      return null;
    }
    if (
      (token && isValidToken(token)) ||
      (localToken && isValidToken(localToken))
    ) {
      const decodedToken: any = jwt.decode(token ? token! : localToken!);
      const { role } = decodedToken as JwtPayload & token;
      if (decodedToken && role !== 'PM') {
        router.replace(routes.chat.url);
        return null;
      }
    }

    return <Wrapped {...props} />;
  };
};

export default PMPrivateRoute;
