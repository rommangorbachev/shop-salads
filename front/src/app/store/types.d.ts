import { SaladModel, SaladsError } from '../models/salad.model';
import { LoginError, RegisterError, UserModel } from '../models/user.model';

export type SaladsState = {
  salads: null | SaladModel[],
  saladsLoading: boolean,
  error: null | SaladsError,
};

export type UsersState = {
  user: null | UserModel,
  registerLoading: boolean,
  registerError: null | RegisterError,
  loginLoading: boolean,
  loginError: null | LoginError,
};

export type AppState = {
  salads: SaladsState,
  users: UsersState
}
