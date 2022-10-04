import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FRONT_END_URL } from '../../config/constants.config';

export const BaseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: FRONT_END_URL,
    credentials: 'include'
  }),
  tagTypes: ['User'],
  endpoints: () => ({})
});
