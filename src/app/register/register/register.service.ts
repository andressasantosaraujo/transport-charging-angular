import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerService(userObJ): Observable<any> {
    return this.http.post<any>('http://localhost:8080/transportcharge/signin', userObJ);
  }
}