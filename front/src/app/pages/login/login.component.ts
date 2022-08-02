import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginData } from '../../models/user.model';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { loginUserRequest } from '../../store/users/users.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  login() {
    const userData: UserLoginData = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.store.dispatch(loginUserRequest({userData}))
  }
}
