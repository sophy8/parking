import { Component, OnInit } from '@angular/core';
import { ParkingServiceService } from './../services/parking-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items = [];
  searchText;

  constructor(private service: ParkingServiceService) {

  }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe((res) => {
      console.log(res);
      this.items = res['features'];
    });
  }
}
