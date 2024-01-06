import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private httpClient: HttpClient) { }

  fetchStages() {
    return this.httpClient.get('http://localhost:9092/api/stage/liste');
  }
  
}
