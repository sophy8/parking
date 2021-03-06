import { Component, OnInit, Input } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-parking-items',
  templateUrl: './parking-items.component.html',
  styleUrls: ['./parking-items.component.scss']
})
export class ParkingItemsComponent implements OnInit {
  @Input() properties;
  @Input() geometry;
  show = false;
  leafletOptions;
  leafletLayers;
  mapCenter;
  zoomLevel;
  marker;
  options;
  //variable for long term
  longTerm;
    //variable for short term
  shortTerm;
  coordinates = [];
  constructor() {
  }

  ngOnInit() {
  }
    //get varible which i need in html component
  showMap(geometry, properties) {
    this.coordinates = geometry.coordinates;
    this.longTerm = properties.layers['parking.garage'].data.FreeSpaceLong;
    this.shortTerm = properties.layers['parking.garage'].data.FreeSpaceShort;
    this.identificateMap();
    this.show = this.show ? false : true;
  }
      //map initialization
  identificateMap() {
    this.mapCenter = latLng(this.coordinates[1], this.coordinates[0]);
    this.zoomLevel = 18;
    this.marker = marker([this.coordinates[1], this.coordinates[0]], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'https://sophy8.github.io/parking/assets/marker-icon.png'
      })
    });
    this.leafletLayers = [tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 100, attribution: '...' })];
    this.marker.bindPopup("<p>Hello world!I am a popups.</p>").openPopup();
    this.options = {
      layers: [this.marker],
      center: latLng([46.879966, -121.726909])
    };
  }
}
