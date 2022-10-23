import { BaseApi } from '../api/api';
import { userLogin, userLoginResponse } from '../../shared/types/user.types';

const loginEndpoint = BaseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<userLoginResponse, userLogin>({
      query: credentials => ({
        url: `auth/login`,
        method: 'POST',
        body: credentials,
        credentials: 'include'
      }),
      invalidatesTags: ['User']
    })
  })
});

export const { useLoginMutation } = loginEndpoint;
