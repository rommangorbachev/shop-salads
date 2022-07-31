import { SaladModel, SaladsError } from '../models/salad.model';

export type SaladsState = {
  salads: null | SaladModel[],
  saladsLoading: boolean,
  error: null | SaladsError,
};


export type AppState = {
  salads: SaladsState,
}
