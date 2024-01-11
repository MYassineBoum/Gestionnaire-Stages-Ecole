import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdentificationComponent } from '../shared/identification/identification.component';
import { Professeur } from '../Classes/professeur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  baseUrl = "http://localhost:9092/";

  constructor(private httpClient: HttpClient) { }

  getProfesseur(email:string) {
    return this.httpClient.get(this.baseUrl+`api/professeur/get?email_professeur=${email}`);
  }

  fetchProfesseurs() {
    return this.httpClient.get('http://localhost:9092/api/professeur/liste');
  }

  ajouterProfesseur(prof: Professeur) {
    return this.httpClient.post('http://localhost:9092/api/professeur/ajouter', prof);
  }

  modifierProfesseur(professeur: Professeur) {
    return this.httpClient.put(this.baseUrl+'api/professeur/modifier', professeur);
  }

  supprimerProfesseur(no_professeur: number): Observable<any> {
    if(confirm("Vous voulez vraiment supprimer ce professeur ?")) {
      return this.httpClient.delete(this.baseUrl+`api/professeur/supprimer/${no_professeur}`, {responseType: 'text'});
    } else {
      return new Observable();
    }
  }
  
}
