import { createAction, props } from '@ngrx/store';
import { LoginError, RegisterError, UserLoginData, UserModel, UserRegisterData } from '../../models/user.model';

export const registerUserRequest = createAction('[Users] Register Request', props<{userData: UserRegisterData}>());
export const registerUserSuccess = createAction('[Users] Register Success', props<{user: UserModel}>());
export const registerUserFailure = createAction('[Users] Register Failure', props<{error: null | RegisterError}>());

export const logoutUser = createAction('[Users] Logout');
export const logoutUserRequest = createAction('[Users] Logout Request');

export const loginUserRequest = createAction('[Users] Login Request', props<{userData: UserLoginData}>());
export const loginUserSuccess = createAction('[Users] Login Success', props<{user: UserModel}>());
export const loginUserFailure = createAction('[Users] Login Failure', props<{error: null | LoginError}>());
