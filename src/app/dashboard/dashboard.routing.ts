import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

export const dashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent}
];

export const appRoutingProviders: any[] = [];
export const weatherRouting = RouterModule.forChild(dashboardRoutes);
