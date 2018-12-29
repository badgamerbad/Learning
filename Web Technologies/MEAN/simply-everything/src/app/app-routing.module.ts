import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';

import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-child/hero-parent.component';
import { NameParentComponent } from './hero-child/name-parent.component';
import { NameChildComponent } from './hero-child/name-child.component';
import { VersionParentComponent } from './hero-child/version-parent.component';
import { VersionChildComponent } from './hero-child/version-child.component';
import { VoteTakerComponent } from './hero-child/votetaker.component';
import { VoterComponent } from './hero-child/voter.component';
import { CountdownLocalVarParentComponent } from './hero-child/parent-child/countdown-parent.component';
import { CountDownTimerComponent } from './hero-child/parent-child/countdown-timer.component';
import { AstronautComponent } from './hero-child/observables/astronaut.component';
import { MissionControlComponent } from './hero-child/observables/missioncontrol.component';
import { MissionService } from './hero-child/observables/mission.service';

const routes: Routes = [
  { path: 'r1', component: Route1Component },
  { path: 'r2', component: Route2Component },
  { path: 'r3', component: Route3Component },
  { path: 'hero-parent', component: HeroParentComponent },
  { path: 'name-parent', component: NameParentComponent },
  { path: 'version-parent', component: VersionParentComponent },
  { path: 'vote-Taker', component: VoteTakerComponent },
  { path: 'countdown-parent', component: CountdownLocalVarParentComponent },
  { path: 'mission-control', component: MissionControlComponent },
];

@NgModule({
  declarations: [
    Route1Component,
    Route2Component,
    Route3Component,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownLocalVarParentComponent,
    CountDownTimerComponent,
    AstronautComponent,
    MissionControlComponent,
  ],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MissionService]
})
export class AppRoutingModule { }
