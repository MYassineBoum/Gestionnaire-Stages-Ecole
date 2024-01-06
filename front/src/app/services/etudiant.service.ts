import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private httpClient: HttpClient) { }

  fetchEtudiants() {
    return this.httpClient.get('http://localhost:9092/api/etudiant/liste');
  }

}
