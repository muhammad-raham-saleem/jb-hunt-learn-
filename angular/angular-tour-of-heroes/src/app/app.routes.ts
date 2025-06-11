import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModel } from '@angular/forms';

export const routes: Routes = [{
    path:'heroes', component: HeroesComponent
}];

export class AppRoutingModule {}
