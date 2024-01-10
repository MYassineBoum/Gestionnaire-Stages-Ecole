import { StageService } from 'src/app/services/stage.service';
import { Component, OnInit } from '@angular/core';
import { Stages } from 'src/app/Classes/stages';
import { Professeur } from 'src/app/Classes/professeur';
import { Etudiant } from 'src/app/Classes/etudiant';
import { Tuteur } from 'src/app/Classes/tuteur';
import { Type } from 'src/app/Classes/type';
import { Entreprise } from 'src/app/Classes/entreprise';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { TuteurService } from 'src/app/services/tuteur.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { TypeService } from 'src/app/services/type.service';


@Component({
  selector: 'app-stage-popup',
  templateUrl: './stage-popup.component.html',
  styleUrls: ['./stage-popup.component.scss']
})
export class StagePopupComponent implements OnInit {

  newStage !: Stages;
  etudiant !: Etudiant;
  professeur !: Professeur;
  tuteur !: Tuteur;
  entreprise !: Entreprise;
  type !: Type;

  listeProfesseurs !: Professeur[];
  listeEtudiants !: Etudiant[];
  listeEntreprises !: Entreprise[];
  listeTuteurs !: Tuteur[];
  listeTypes !: Type[];

  constructor(
    private stageService: StageService,
    private professeurService: ProfesseurService,
    private tuteurService: TuteurService,
    private etudiantService: EtudiantService,
    private entrepriseService: EntrepriseService,
    private typeService: TypeService
  ) {
    this.etudiant = new Etudiant();
    this.professeur = new Professeur();
    this.tuteur = new Tuteur();
    this.entreprise = new Entreprise();
    this.type = new Type();

    this.newStage = new Stages();
      
    this.listeProfesseurs = [];
    this.listeEtudiants = [];
    this.listeEntreprises = [];
    this.listeTuteurs = [];
    this.listeTypes = [];
  }

  ngOnInit(): void {
    this.fetchProfesseurs();
    this.fetchEtudiants();
    this.fetchEntreprises();
    this.fetchTuteurs();
    this.fetchTypes();
    //console.log("hadi hia : " + this.listeEtudiants);
  }

  fetchProfesseurs() {
    this.professeurService.fetchProfesseurs().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeProfesseurs = resp as Professeur[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fetchEtudiants() {
    this.etudiantService.fetchEtudiants().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeEtudiants = resp as Etudiant[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fetchEntreprises() {
    this.entrepriseService.fetchEntreprises().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeEntreprises = resp as Entreprise[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fetchTuteurs() {
    this.tuteurService.fetchTuteurs().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeTuteurs = resp as Tuteur[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fetchTypes() {
    this.typeService.fetchTypes().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeTypes = resp as Type[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  approuverAjout() {
    this.newStage.etudiant = this.etudiant;
    this.newStage.entreprise = this.entreprise;
    this.newStage.professeur = this.professeur;
    this.newStage.tuteur = this.tuteur;
    this.newStage.type = this.type;
    this.stageService.ajouterStage(this.newStage).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Stage ajouté!");
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
