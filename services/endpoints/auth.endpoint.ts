import { BaseApi } from '../api/api';
import {
  userInfoResponse,
  userLogin,
  userLoginResponse
} from '../../shared/types/user.types';

const loginEndpoint = BaseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<userLoginResponse, userLogin>({
      query: credentials => ({
        url: `auth/login`,
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['User']
    }),
    userInfo: builder.mutation<userInfoResponse, void>({
      query: credentials => ({
        url: `auth/userInfo`,
        method: 'GET',
        body: credentials
      })
    }),
    userLogout: builder.mutation<userLoginResponse, void>({
      query: credentials => ({
        url: `auth/logout`,
        method: 'GET',
        body: credentials
      })
    })
  })
});

export const { useLoginMutation, useUserInfoMutation, useUserLogoutMutation } = loginEndpoint;
