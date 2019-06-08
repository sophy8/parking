import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingItemsComponent } from './parking-items/parking-items.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from './../component/material/material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [ParkingItemsComponent, DashboardComponent, SearchPipe],
  imports: [
    CommonModule,
    MaterialModule, LeafletModule, ReactiveFormsModule, FormsModule
  ]
})
export class DashboardModule { }
