import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private httpClient: HttpClient) { }

  fetchCompetences() {
    return this.httpClient.get('http://localhost:9092/api/competence/liste');
  }

}
