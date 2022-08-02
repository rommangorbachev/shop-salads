import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from './models/user.model';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from './store/types';
import { logoutUser } from './store/users/users.actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  user: Observable<null | UserModel>;
  token: null | string = null;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.user = store.select(state => state.users.user);
    this.user.subscribe((user) => {
      this.token = user ? user.token : null;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
      request = request.clone({
        setHeaders: { 'Authorization': this.token }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          // this.helpersService.openSnackBar('Internet error');
        }

        if (error.status === 401) {
          this.store.dispatch(logoutUser());
          void this.router.navigate(['/']);
        }

        return throwError(() => error);
      }),
    );
  }
}
