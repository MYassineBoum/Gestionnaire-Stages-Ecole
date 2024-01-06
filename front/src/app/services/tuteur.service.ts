import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TuteurService {

  constructor(private httpClient: HttpClient) { }

  fetchTuteurs() {
    return this.httpClient.get('http://localhost:9092/api/tuteur/liste');
  }
  
}
