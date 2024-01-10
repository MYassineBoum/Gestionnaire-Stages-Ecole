import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../Classes/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private httpClient: HttpClient) { }

  fetchEntreprises() {
    return this.httpClient.get('http://localhost:9092/api/entreprise/liste');
  }

  ajouterEntreprise(entreprise: Entreprise) {
    return this.httpClient.post('http://localhost:9092/api/entreprise/ajouter', entreprise);
  }
  
}
