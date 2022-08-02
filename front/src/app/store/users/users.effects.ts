import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import {
  logoutUserRequest,
  registerUserRequest,
  registerUserSuccess,
  logoutUser,
  loginUserSuccess,
  loginUserRequest,
} from './users.actions';
import { map, mergeMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()
export class UsersEffects {

  constructor(
    private actions: Actions,
    private router: Router,
    private store: Store<AppState>,
    private usersService: UsersService,
  ) {}

  registerUser = createEffect(() => this.actions.pipe(
    ofType(registerUserRequest),
    mergeMap(({userData}) => this.usersService.register(userData).pipe(
      map((user) => registerUserSuccess({user})),
      tap(() => {
        void this.router.navigate(['/']);
      }),
    )),
  ));

  logoutUser = createEffect(() => this.actions.pipe(
    ofType(logoutUserRequest),
    mergeMap(() => this.usersService.logout().pipe(
      map(() => logoutUser()),
      tap(() => {
        void this.router.navigate(['/']);
      }),
    )),
  ));

  loginUser = createEffect(() => this.actions.pipe(
    ofType(loginUserRequest),
    mergeMap(({userData}) => this.usersService.login(userData).pipe(
      map((user) => loginUserSuccess({user})),
      tap(() => {
        void this.router.navigate(['/']);
      }),
    )),
  ));


}
