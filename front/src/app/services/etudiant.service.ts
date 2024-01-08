import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  baseUrl = "http://localhost:9092/";

  constructor(private httpClient: HttpClient) { }

  getEtudiant(email:string) {
    return this.httpClient.get(this.baseUrl+`api/etudiant/get?email_etudiant=${email}`)
  }

  fetchEtudiants() {
    return this.httpClient.get('http://localhost:9092/api/etudiant/liste');
  }

}
