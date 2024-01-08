import { Etudiant } from "./etudiant";
import { Professeur } from "./professeur";

export class Stages {

    no_stage!:number;
    etudiant!:Etudiant;
    professeur!:Professeur;
    tuteur?:any;
    entreprise?:any;
    type!:any;
    annee_stage!:number;
    compte_rendu_stage!:string;

}
