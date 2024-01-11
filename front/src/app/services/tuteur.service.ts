import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tuteur } from '../Classes/tuteur';
import { Observable } from 'rxjs';

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

  modifierTuteur(tuteur: Tuteur) {
    return this.httpClient.put('http://localhost:9092/api/tuteur/modifier', tuteur);
  }

  supprimerTuteur(no_tuteur: number): Observable<any> {
    if(confirm("Vous voulez vraiment supprimer ce tuteur ?")) {
      return this.httpClient.delete(`http://localhost:9092/api/tuteur/supprimer/${no_tuteur}`, {responseType: 'text'});
    } else {
      return new Observable();
    }
  }
  
}
