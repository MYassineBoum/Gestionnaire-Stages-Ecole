import { CompetenceService } from './../../services/competence.service';
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
import { Competence } from 'src/app/Classes/competence';
import { Niveau } from 'src/app/Classes/niveau';


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
  competence !: Competence;
  niveau !: Niveau;

  listeProfesseurs !: Professeur[];
  listeEtudiants !: Etudiant[];
  listeEntreprises !: Entreprise[];
  listeTuteurs !: Tuteur[];
  listeTypes !: Type[];
  listeCompetences !: Competence[];

  constructor(
    private stageService: StageService,
    private professeurService: ProfesseurService,
    private tuteurService: TuteurService,
    private etudiantService: EtudiantService,
    private entrepriseService: EntrepriseService,
    private typeService: TypeService,
    private competenceService: CompetenceService
  ) {
    this.etudiant = new Etudiant();
    this.professeur = new Professeur();
    this.tuteur = new Tuteur();
    this.entreprise = new Entreprise();
    this.type = new Type();
    this.competence = new Competence();
    this.niveau = new Niveau();

    this.newStage = new Stages();
      
    this.listeProfesseurs = [];
    this.listeEtudiants = [];
    this.listeEntreprises = [];
    this.listeTuteurs = [];
    this.listeTypes = [];
    this.listeCompetences = [];
  }

  ngOnInit(): void {
    this.fetchProfesseurs();
    this.fetchEtudiants();
    this.fetchEntreprises();
    this.fetchTuteurs();
    this.fetchTypes();
    this.fetchCompetences();
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

  fetchCompetences() {
    this.competenceService.fetchCompetences().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeCompetences = resp as Competence[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  waitOneSecond(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  grabNiveau(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.stageService.trouverNiveau(this.type.code_type, this.competence.code_competence).subscribe(
        {
          next: resp => {
            this.niveau.niveau_exige = resp as number;
            this.niveau.competence = this.competence;
            this.niveau.type = this.type;
            this.newStage.niveau = this.niveau;
            console.log("xxxxxxxxxxxxxxx : " + JSON.stringify(this.newStage.niveau));
            resolve(); // Resolve the promise when the asynchronous call is completed
          },
          error: err => {
            console.log(err);
            reject(err); // Reject the promise if there is an error
          }
        }
      );
    });
  }
  

  async approuverAjout() {
    this.newStage.etudiant = this.etudiant;
    this.newStage.entreprise = this.entreprise;
    this.newStage.professeur = this.professeur;
    this.newStage.tuteur = this.tuteur;
    this.newStage.type = this.type;
    this.newStage.competence = this.competence;
    await this.grabNiveau();
    //await this.waitOneSecond();
    console.log("xxxxxxxxxxxxxxx2 : " + JSON.stringify(this.newStage.niveau));
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
