import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private httpClient: HttpClient) { }

  fetchEntreprises() {
    return this.httpClient.get('http://localhost:9092/api/entreprise/liste');
  }
  
}
