import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.scss']
})
export class TravelRequestComponent {
  texto = 'Wenceslau Braz - Cuidado com as cargas';
  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;
  openList = false;
  lineSelected = false;
  message = false;

  titleList = [
    { name: "Number" },
    { name: "Source" },
    { name: "Destination" },
    { name: "Time" },
    { name: "Value" },
    { name: "Duration" },
    { name: "License plate" },
    { name: "Driver" }
  ]

  lineBus = {
    numberLinha: "746",
    source: "Hortolândia",
    destination: "Campinas",
    time: "7:10",
    value: "5.55",
    duration: "2:00",
    licensePlate: "TON4875",
    driver: "Guilherme"
  }

  lineBusList = [
    this.lineBus,
    this.lineBus,
    this.lineBus
  ]

  search(e) {
    this.openList = true;
  }

  selectLineBus(e) {
    this.openList = false;
    this.lineSelected = true;

  }
  confirm() {
    this.openList = false;
    this.lineSelected = false;
    this.message = true;    
  }
}
