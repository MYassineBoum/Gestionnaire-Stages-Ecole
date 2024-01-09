import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../Classes/etudiant';

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
    return this.httpClient.get(`http://localhost:9092/api/etudiant/get/promo?annee_promo=${annee_promo}`);
  }

}
