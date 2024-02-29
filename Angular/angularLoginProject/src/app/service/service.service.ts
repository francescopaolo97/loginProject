import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getUtenti(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/api/utente/visualizzaUtenti'
    );
  }
}
