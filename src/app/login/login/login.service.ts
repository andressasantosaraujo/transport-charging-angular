import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginService(loginObj): Observable<any> {
    return this.http.post<any>('http://localhost:8080/transportcharge/login', loginObj);
  }
}
