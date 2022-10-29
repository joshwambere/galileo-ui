import jwt from 'jsonwebtoken';
import { NEXT_PUBLIC_API_SECRETE } from '../../../config/constants.config';

export const isValidToken = (token: string): boolean => {
  if (!NEXT_PUBLIC_API_SECRETE) return false;
  try {
    jwt.verify(token, NEXT_PUBLIC_API_SECRETE);
    return true;
  } catch (error) {
    return false;
  }
};
