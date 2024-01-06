import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  constructor(private httpClient: HttpClient) { }

  fetchProfesseurs() {
    return this.httpClient.get('http://localhost:9092/api/professeur/liste');
  }
  
}
