import { configureStore } from '@reduxjs/toolkit';
import { BaseApi } from '../../services/api/api';
import authReducer from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(BaseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
