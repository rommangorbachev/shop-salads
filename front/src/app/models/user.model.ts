export class UserModel {
  constructor(
    public _id: string,
    public email: string,
    public name: string,
    public avatar: string,
    public token: string,
    public role: string,

  ) {}
}

export interface FieldError {
  message: string;
}

export interface UserRegisterData {
  email: string;
  password: string;
  name: string;
}

export interface RegisterError {
  errors: {
    email?: undefined | FieldError;
    password?: undefined | FieldError;
    displayName?: undefined | FieldError;
  }
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface LoginError {
  error: string;
}
