import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingItemsComponent } from './parking-items/parking-items.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from './../component/material/material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [ParkingItemsComponent, DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule, LeafletModule
  ]
})
export class DashboardModule { }
