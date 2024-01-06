import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpClient: HttpClient) { }

  fetchTypes() {
    return this.httpClient.get('http://localhost:9092/api/type/liste');
  }
  
}
