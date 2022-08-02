import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaladModel } from '../../models/salad.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { fetchSaladsRequest } from '../../store/salads/salads.actions';

@Component({
  selector: 'app-salads-page',
  templateUrl: './salads-page.component.html',
  styleUrls: ['./salads-page.component.css']
})
export class SaladsPageComponent implements OnInit {

  salads: Observable<null | SaladModel[]>

  constructor( private store: Store<AppState>) {
    this.salads = store.select(state => state.salads.salads)
  }

  ngOnInit(): void {
    this.store.dispatch(fetchSaladsRequest());
  }


}
