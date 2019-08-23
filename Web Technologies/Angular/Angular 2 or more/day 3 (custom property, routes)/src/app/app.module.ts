import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { learn_n_try_persistent_universityComponent } from './learn_n_try_persistent_university.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';

import { ProfileComponent } from './profile.component';
import { usersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './menu.component';
import { UserDetailsComponent } from './userdetails.component';

let routes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: usersComponent,
    children: [{ //child routes
      path:'userdetails/:username',
      component: UserDetailsComponent
    }]
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent, learn_n_try_persistent_universityComponent, HeaderComponent, LoginComponent, ProfileComponent, usersComponent, MenuComponent, UserDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
