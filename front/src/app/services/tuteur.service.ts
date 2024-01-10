import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tuteur } from '../Classes/tuteur';

@Injectable({
  providedIn: 'root'
})
export class TuteurService {

  constructor(private httpClient: HttpClient) { }

  fetchTuteurs() {
    return this.httpClient.get('http://localhost:9092/api/tuteur/liste');
  }

  ajouterTuteur(tuteur: Tuteur) {
    return this.httpClient.post('http://localhost:9092/api/tuteur/ajouter', tuteur);
  }
  
}
