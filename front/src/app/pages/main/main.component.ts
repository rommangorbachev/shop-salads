import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaladModel } from '../../models/salad.model';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { fetchSaladsRequest } from '../../store/salads/salads.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  salads: Observable<null | SaladModel[]>

  constructor( private store: Store<AppState>) {
    this.salads = store.select(state => state.salads.salads)
  }

  ngOnInit(): void {
    this.store.dispatch(fetchSaladsRequest());
  }

}
