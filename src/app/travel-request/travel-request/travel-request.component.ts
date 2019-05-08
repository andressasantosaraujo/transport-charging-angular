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

  search(e) {
  }
}
