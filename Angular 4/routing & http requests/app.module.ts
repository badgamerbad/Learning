import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeroMenuComponent } from './hero_menu.component';
import { HeroTourComponent } from './hero_tour.component';
import { HeroFormComponent } from './hero_form.component';
import { HttpRequests } from './http_requests.component';
import { HttpRequestsChildComponent } from './http_requests_child.component';

let routes:Routes = [
  {
    path: '',
    component: HeroTourComponent
  },
  {
    path: 'heroforms',
    component: HeroFormComponent
  },
  {
    path: 'herotour',
    component: HeroTourComponent
  },
  {
    path: 'http',
    component: HttpRequests,
    children: [
      {
        path: 'httpchild/:user',
        component: HttpRequestsChildComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent, HeroMenuComponent, HeroTourComponent, HeroFormComponent, HttpRequests, HttpRequestsChildComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
