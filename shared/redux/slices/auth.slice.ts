import { createSlice } from '@reduxjs/toolkit';
import { user } from '../../types/auth.slice.types';

type AuthState = {
  user: user | undefined;
  token: string | undefined;
  loading: boolean;
  error: boolean;
  success: boolean;
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: undefined
  } as AuthState,
  reducers: {
    setCredentials: (state, { payload: { token } }) => {
      state.token = token;
      localStorage.setItem('_galileo_tkn', token);
    },

    setUserInfo: (state, { payload: { user } }) => {
      state.user = user;
      localStorage.setItem('_galileo_usr', JSON.stringify(user));
    },

    removeCredentials: state => {
      state.token = undefined;
      localStorage.removeItem('_galileo_tkn');
    }
  }
});

export const { setCredentials, removeCredentials, setUserInfo } = slice.actions;
export default slice.reducer;
