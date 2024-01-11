import { Type } from "./type";
import { Entreprise } from "./entreprise";
import { Etudiant } from "./etudiant";
import { Professeur } from "./professeur";
import { Tuteur } from "./tuteur";
import { Competence } from "./competence";
import { Niveau } from "./niveau";

export class Stages {

    no_stage!:number;
    etudiant!:Etudiant;
    professeur!:Professeur;
    tuteur!:Tuteur;
    entreprise!:Entreprise;
    annee_stage!:number;
    type!:Type;
    competence !: Competence;
    niveau !: Niveau;
    compte_rendu_stage!:string;

}
