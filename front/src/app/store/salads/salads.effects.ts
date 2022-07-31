import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SaladsService } from '../../services/salads.service';
import { fetchSaladsFailure, fetchSaladsRequest, fetchSaladsSuccess } from './salads.actions';

@Injectable()
export class SaladsEffects {

  constructor(private saladsService: SaladsService,
              private actions: Actions,
  ) {}

  fetchSalads = createEffect(() => this.actions.pipe(
    ofType(fetchSaladsRequest),
    mergeMap(() => this.saladsService.getSalads().pipe(
      map(salads => fetchSaladsSuccess({salads})),
      catchError((error) => of(fetchSaladsFailure({error})))))));
}
