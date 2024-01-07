import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdentificationComponent } from '../shared/identification/identification.component';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  baseUrl = "http://localhost:9092/";

  constructor(private httpClient: HttpClient) { }

  getProfesseur(email:string) {
    this.httpClient.get(this.baseUrl+`api/professeur?email_professeur=${email}`).subscribe(
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
}
