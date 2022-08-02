import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { localStorageSync } from 'ngrx-store-localstorage';
import { SaladsEffects } from './store/salads/salads.effects';
import { saladsReducer } from './store/salads/salads.reducer';
import { usersReducer } from './store/users/users.reducer';
import { UsersEffects } from './store/users/users.effects';


const localStorageSyncReducer = (reducer: ActionReducer<any>) => {
  return localStorageSync({
    keys: [{users: ['user']}],
    rehydrate: true,
  })(reducer);
};

const metaReducers: MetaReducer[] = [localStorageSyncReducer];
const reducers = {
  salads: saladsReducer,
  users: usersReducer
};

const effects = [
  SaladsEffects,
  UsersEffects
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
  ],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule { }
