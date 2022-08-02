import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel, UserLoginData, UserRegisterData } from '../models/user.model';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  register(registerData: UserRegisterData) {
    return this.http.post<UserModel>(env.urlApi + '/users', registerData);
  }

  logout() {
    return this.http.delete(env.urlApi + '/users/sessions');
  }

  login(loginData: UserLoginData) {
    return this.http.post<UserModel>(env.urlApi + '/users/sessions', loginData);
  }

}
