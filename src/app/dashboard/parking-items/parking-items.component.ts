import { Component, OnInit, Input } from '@angular/core';
import { latLng, tileLayer, marker, icon, popup } from 'leaflet';

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
  longTerm;
  coordinates = [];
  constructor() {
  }

  ngOnInit() {
  }
  showMap(geometry, properties) {
    this.coordinates = geometry.coordinates;
    this.longTerm = properties.layers['parking.garage'].data.FreeSpaceLong;
    this.identificateMap();
    // this.show = this.show ? false : true;
    this.show = true;
  }
  identificateMap() {
    this.mapCenter = latLng(this.coordinates[1], this.coordinates[0]);
    this.zoomLevel = 18;
    this.marker = marker([this.coordinates[1], this.coordinates[0]], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: '../../../assets/marker-icon.png'
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
