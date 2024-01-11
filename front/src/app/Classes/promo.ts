import { Professeur } from "./professeur";

export class Promo {
    annee_promo !: number;
    nb_etudiants : number = 0;
    professeur !: Professeur;
}
