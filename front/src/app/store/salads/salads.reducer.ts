import { createReducer, on } from '@ngrx/store';
import { SaladsState } from '../types';
import { fetchSaladsFailure, fetchSaladsRequest, fetchSaladsSuccess } from './salads.actions';

const initialState: SaladsState = {
  salads: [],
  saladsLoading: false,
  error: null,
};

export const saladsReducer = createReducer(
  initialState,
  on(fetchSaladsRequest, state => ({...state, saladsLoading: true})),
  on(fetchSaladsSuccess, (state, {salads}) => ({...state, saladsLoading: false, salads})),
  on(fetchSaladsFailure, (state, {error}) => ({...state, saladsLoading: false, error: error})),

)
