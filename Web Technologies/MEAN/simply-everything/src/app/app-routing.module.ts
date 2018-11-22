import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';

import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-child/hero-parent.component';

const routes: Routes = [
  { path: 'r1', component: Route1Component },
  { path: 'r2', component: Route2Component },
  { path: 'r3', component: Route3Component },
  { path: 'hero-parent', component: HeroParentComponent },
  { path: 'hero-child', component: HeroChildComponent },
];

@NgModule({
  declarations: [
    Route1Component,
    Route2Component,
    Route3Component,
    HeroChildComponent,
    HeroParentComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
