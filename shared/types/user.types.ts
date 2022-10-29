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
