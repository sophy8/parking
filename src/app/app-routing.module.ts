import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {dashboardRoutes} from './dashboard/dashboard.routing';

const routes: Routes = [
  ...dashboardRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
