import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../Classes/entreprise';
import { Observable } from 'rxjs';

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

  modifierEntreprise(entreprise: Entreprise) {
    return this.httpClient.put('http://localhost:9092/api/entreprise/modifier', entreprise);
  }
  
  supprimerEntreprise(no_entreprise: number): Observable<any> {
    if(confirm("Vous voulez vraiment supprimer cette entreprise ?")) {
      return this.httpClient.delete(`http://localhost:9092/api/entreprise/supprimer/${no_entreprise}`, {responseType: 'text'});
    } else {
      return new Observable();
    }
  }
}
