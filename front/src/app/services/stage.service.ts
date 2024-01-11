import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stages } from '../Classes/stages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private httpClient: HttpClient) { }

  ajouterStage(stage: Stages) {
    return this.httpClient.post('http://localhost:9092/api/stage/ajouter', stage);
  }

  fetchStages() {
    return this.httpClient.get('http://localhost:9092/api/stage/liste');
  }

  fetchStagesEtudiant(no_etudiant:number) {
    return this.httpClient.get(`http://localhost:9092/api/etudiant/get/stage?no_etudiant=${no_etudiant}`);
  }

  fetchStagesProfesseur(no_professeur:number) {
    return this.httpClient.get(`http://localhost:9092/api/etudiant/get/stageProf?no_professeur=${no_professeur}`);
  }

  modifierStage(stage: Stages) {
    return this.httpClient.put('http://localhost:9092/api/stage/modifier', stage);
  }

  supprimerStage(no_stage: number): Observable<any>  {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce stage?")) {
      return this.httpClient.delete(`http://localhost:9092/api/stage/supprimer/${no_stage}`, {responseType: 'text'});
    } else {
      return new Observable();
    }
  }
  
}
