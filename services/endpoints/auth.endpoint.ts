import { BaseApi } from '../api/api';
import {
  userInfoResponse,
  userLogin,
  userLoginResponse,
  UserSignupRequest,
  UserSignupResponse, UserVerifyRequest, UserVerifyResponse
} from "../../shared/types/user.types";

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
    signup: builder.mutation<UserSignupResponse, UserSignupRequest>({
      query: credentials => ({
        url: `auth/signup`,
        method: 'POST',
        body: credentials
      })
    }),
    verify: builder.mutation<UserVerifyResponse, UserVerifyRequest>({
      query: credentials => ({
        url: `auth/verify`,
        method: 'POST',
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

export const {
  useLoginMutation,
  useUserInfoMutation,
  useUserLogoutMutation,
  useSignupMutation,
  useVerifyMutation
} = loginEndpoint;
