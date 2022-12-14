import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaladCardComponent } from './ui/salad-card/salad-card.component';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { AppStoreModule } from './app-store.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaladsPageComponent } from './pages/salads-page/salads-page.component';
import { BasketComponent } from './ui/basket/basket.component';
import { CenteredCardComponent } from './ui/centered-card/centered-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SaladCardComponent,
    HeaderComponent,
    MainComponent,
    SaladsPageComponent,
    BasketComponent,
    CenteredCardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
