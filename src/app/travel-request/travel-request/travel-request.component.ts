import { Component } from '@angular/core';
import { TravelRequestService } from './travel-request.service';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.scss']
})
export class TravelRequestComponent {

  constructor(private travelRequestService: TravelRequestService) {

  }

  texto = 'Wenceslau Braz - Cuidado com as cargas';
  lat = -22.8541072;
  lng = -47.2295633;
  zoom = 15;
  openList = false;
  lineSelected = false;
  message = false;
  travelRequestObj = {
    origin: 'Av. Thereza Ana Cecon Breda, Hortolândia - SP ',
    destination: 'Travessa Jõse Lúcio Martins dos Santos, 290 - Parque Gabriel, Hortolândia - SP, 13186-033'
  }

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
    numberLinha: "698",
    source: "Hortolândia",
    destination: "Campinas",
    time: "15:13",
    value: "4.90",
    duration: "0:31",
    licensePlate: "XXXXXXX",
    driver: "XXXXXXXXX"
  }

  lineBus1 = {
    numberLinha: "741",
    source: "Hortolândia",
    destination: "Campinas",
    time: "15:18",
    value: "9.98",
    duration: "00:15",
    licensePlate: "XXXXXXX",
    driver: "XXXXXXXXX"
  }

  lineBus2 = {
    numberLinha: "702",
    source: "Hortolândia",
    destination: "Campinas",
    time: "15:16",
    value: "4.90",
    duration: "00:31",
    licensePlate: "XXXXXXX",
    driver: "XXXXXXXXX"
  }

  lineBusList = [
    this.lineBus,
    this.lineBus1,
    this.lineBus2
  ]

  lineBusSelected = {
    numberLinha: "",
    source: "",
    destination: "",
    time: "",
    value: "",
    duration: "",
    licensePlate: "",
    driver: ""
  }

  search() {
    this.travelRequestService.travelRequestService(this.travelRequestObj).subscribe(data => console.log(data));
    this.openList = true;
  }

  selectLineBus(lineBusItem) {
    this.lineBusSelected = {
      numberLinha: lineBusItem.numberLinha,
      source: this.travelRequestObj.origin,
      destination: this.travelRequestObj.destination,
      time: lineBusItem.time,
      value: lineBusItem.value,
      duration: lineBusItem.duration,
      licensePlate: lineBusItem.licensePlate,
      driver: lineBusItem.driver
    }
    this.openList = false;
    this.lineSelected = true;

  }
  confirm() {
    this.openList = false;
    this.lineSelected = false;
    this.message = true;    
  }
}
