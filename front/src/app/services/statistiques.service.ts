import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  baseUrl = "http://localhost:9092/";

  constructor(private httpClient: HttpClient) { }

  getStatistiques() {
    return this.httpClient.get(this.baseUrl+"api/dashboard/statistiques").subscribe(
      {
        next: (resp) => {
          console.log(resp);
          localStorage.setItem("statistiquesObject", JSON.stringify(resp));
        },
        error: (err) => {
          //console.log("Erreur lors de la récupération des statistiques");
          console.log(err);
        }
      }
    );
  }
}
