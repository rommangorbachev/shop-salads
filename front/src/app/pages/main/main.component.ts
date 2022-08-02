import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { logoutUserRequest } from '../../store/users/users.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: Observable<null | UserModel>;

  constructor(private store: Store<AppState>,) {
    this.user = store.select((state) => state.users.user);
  }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logoutUserRequest());
  }

}
