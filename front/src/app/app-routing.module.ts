import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladsPageComponent } from './pages/salads-page/salads-page.component';
import { BasketComponent } from './ui/basket/basket.component';

const routes: Routes = [
  {path: '', component: SaladsPageComponent},
  {path: 'basket', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
