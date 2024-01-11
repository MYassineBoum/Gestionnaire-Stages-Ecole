import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../Classes/etudiant';
import { Observable } from 'rxjs';
import { Promo } from '../Classes/promo';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  baseUrl = "http://localhost:9092/";

  constructor(private httpClient: HttpClient) { }

  getEtudiant(email:string) {
    return this.httpClient.get(this.baseUrl+`api/etudiant/get?email_etudiant=${email}`)
  }

  ajouterEtudiant(etudiant: Etudiant) {
    return this.httpClient.post(this.baseUrl+'api/etudiant/ajouter', etudiant);
  }

  fetchEtudiants() {
    return this.httpClient.get('http://localhost:9092/api/etudiant/liste');
  }

  fetchEtudiantsParPromo(annee_promo: number) {
    return this.httpClient.get(`http://localhost:9092/api/etudiant/promo?annee_promo=${annee_promo}`);
  }

  supprimerEtudiant(no_etudiant: number): Observable<any> {
    if(confirm("Vous voulez vraiment supprimer cet étudiant ?")){
      return this.httpClient.delete(`http://localhost:9092/api/etudiant/supprimer/${no_etudiant}`, {responseType: 'text'});
    } else {
      return new Observable();
    }
  }

  modifierEtudiant(etudiant: Etudiant) {
    return this.httpClient.put(this.baseUrl+'api/etudiant/modifier', etudiant);
  }

}
