import { BaseApi } from '../api/api';
import {
  forgotPasswordRequest,
  forgotPasswordResponse,
  resetPasswordRequest,
  resetPasswordResponse,
  userInfoResponse,
  userLogin,
  userLoginResponse,
  userProfileRequest,
  userProfileResponse,
  UserSignupRequest,
  UserSignupResponse,
  UserVerifyRequest,
  UserVerifyResponse
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
      }),
      invalidatesTags: ['UserInfo']
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
    }),
    updateProfile: builder.mutation<userProfileResponse, userProfileRequest>({
      query: credentials => ({
        url: `auth/updateProfile`,
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['UserInfo']
    }),
    forgotPassword: builder.mutation<
      forgotPasswordResponse,
      forgotPasswordRequest
    >({
      query: credentials => ({
        url: `auth/forgotPassword`,
        method: 'POST',
        body: credentials
      })
    }),
    resetPassword: builder.mutation<
      resetPasswordResponse,
      resetPasswordRequest
    >({
      query: credentials => ({
        url: `auth/resetPassword/${credentials.token}`,
        method: 'POST',
        body: { password: credentials.password }
      })
    })
  })
});

export const {
  useLoginMutation,
  useUserInfoMutation,
  useUserLogoutMutation,
  useSignupMutation,
  useVerifyMutation,
  useUpdateProfileMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation
} = loginEndpoint;
