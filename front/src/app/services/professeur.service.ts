import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professeur } from '../Classes/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  constructor(private httpClient: HttpClient) { }

  fetchProfesseurs() {
    return this.httpClient.get('http://localhost:9092/api/professeur/liste');
  }

  ajouterProfesseur(prof: Professeur) {
    return this.httpClient.post('http://localhost:9092/api/professeur/ajouter', prof);
  }
  
}
