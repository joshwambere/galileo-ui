export interface userLogin {
  email: string;
  password: string;
}

export interface userLoginResponse {
  message: string;
}

export interface userInfoResponse {
  data: userResponse;
  message: string;
}

export interface userResponse {
  _id: string;
  userName: string;
  email: string;
  employeeId: string;
  profileImage: string;
}
export type UserSignupResponse = {
  data?: any;
  message: string;
};

export type UserSignupRequest = {
  name: string;
  email: string;
  userName: string;
  employeeId: string;
  profileImage: string;
  password: string;
};

export type UserVerifyRequest = {
  otp: string;
};
export type UserVerifyResponse = {
  data?: any;
  message: string;
};
