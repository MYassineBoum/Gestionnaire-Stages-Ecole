import { Component, Input, OnInit } from '@angular/core';
import { Professeur } from '../Classes/professeur';
import { IdentificationComponent } from '../shared/identification/identification.component';
import { Etudiant } from '../Classes/etudiant';
import { Stages } from '../Classes/stages';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserInterfaceComponent implements OnInit {
  professeur!: Professeur;
  etudiant!:Etudiant;
  listeStagesProf!:Stages[];
  listeStagesEtud!:Stages[];
  constructor(private iden:IdentificationComponent,private stageservice:StageService) {
    this.listeStagesProf = [];
    this.listeStagesEtud = [];
    this.professeur = new Professeur();
    this.etudiant = new Etudiant();
  }
  
  ngOnInit() {
    this.professeur = JSON.parse(localStorage.getItem('professeurObject')!) as Professeur;  
    this.etudiant = JSON.parse(localStorage.getItem('etudiantObject')!) as Etudiant;
    if(this.etudiant!=null)  this.getStagesEtud();
    if(this.professeur!=null)  this.getStagesProf();
  }

  getStagesEtud() {
    this.stageservice.fetchStagesEtudiant(this.etudiant.no_etudiant).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          this.listeStagesEtud = resp as Stages[];
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
  getStagesProf(){
    this.stageservice.fetchStagesProfesseur(this.professeur.no_professeur).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          this.listeStagesProf = resp as Stages[];
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
}
