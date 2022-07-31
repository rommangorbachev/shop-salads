import { createAction, props } from '@ngrx/store';
import { SaladModel, SaladsError } from '../../models/salad.model';

export const fetchSaladsRequest = createAction('[Salads] Fetch Request');
export const fetchSaladsSuccess = createAction('[Salads] Fetch Success', props<{salads: SaladModel[]}>());
export const fetchSaladsFailure = createAction('[Salads] Fetch Failure', props<{error: null | SaladsError}>());
