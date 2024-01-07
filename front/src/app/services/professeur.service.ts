import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdentificationComponent } from '../shared/identification/identification.component';
import { Professeur } from '../Classes/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  baseUrl = "http://localhost:9092/";

  constructor(private httpClient: HttpClient) { }

  getProfesseur(email:string) {
    return this.httpClient.get(this.baseUrl+`api/professeur/get?email_professeur=${email}`).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          localStorage.setItem("professeurObject", JSON.stringify(resp));
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  fetchProfesseurs() {
    return this.httpClient.get('http://localhost:9092/api/professeur/liste');
  }

  ajouterProfesseur(prof: Professeur) {
    return this.httpClient.post('http://localhost:9092/api/professeur/ajouter', prof);
  }
  
}
