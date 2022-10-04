import { configureStore } from '@reduxjs/toolkit';
import { BaseApi } from '../../services/api/api';

export const store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(BaseApi.middleware)
});
