import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {

  constructor(private http: HttpClient) { }

  travelRequestService(travelRequestObj): Observable<any> {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/directions/json?origin=${travelRequestObj.origin}&destination=${travelRequestObj.destination}&mode=transit&key=${environment.apiKey}`);
  }
}
