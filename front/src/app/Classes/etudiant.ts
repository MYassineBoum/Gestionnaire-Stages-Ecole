import { Promo } from "./promo";

export class Etudiant {

    no_etudiant!:number;
    nom_etudiant!:string;
    prenom_etudiant!:string;
    email_etudiant!:string;
    adresse_etudiant!:string;
    code_postal_etudiant!:string;
    ville_etudiant!:string;
    date_naissance_etudiant!:Date;
    sexe_etudiant!:string;
    telephone_etudiant!:string;
    mention_etudiant!:string;
    qualite_etudiant!:string;
    promo!:Promo;
}
