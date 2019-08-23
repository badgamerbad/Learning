import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { ProductsComponent } from './products.component';

import { LoginComponent } from './login.component';

import { MobileProductsComponent } from './mobileproducts.component';

import { SignUpFormComponent } from './signupform.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, ProductsComponent, LoginComponent, SignUpFormComponent,MobileProductsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
