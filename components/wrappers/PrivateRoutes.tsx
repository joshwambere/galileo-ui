/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { isValidToken } from '../../shared/utils/validations/jwt.validation';
import {
  removeCredentials,
  setCredentials,
  setUserInfo
} from '../../shared/redux/slices/auth.slice';
import { routes } from '../../config/router.config';
import { BaseApi } from '../../services/api/api';
import { RootState } from '../../shared/redux/store';

const WithPrivateRoute = (Wrapped: any) => {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);
    const localToken = localStorage.getItem('_galileo_tkn');
    const localUserInfo = localStorage.getItem('_galileo_usr');

    if (!token && localToken) {
      dispatch(setCredentials({ token: localToken }));
      dispatch(setUserInfo({ user: localUserInfo }));
    }

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
    return <Wrapped {...props} />;
  };
};

export default WithPrivateRoute;
