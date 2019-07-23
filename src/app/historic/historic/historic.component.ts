import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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

}
