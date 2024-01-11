import { Competence } from "./competence";
import { Type } from "./type";


export class Niveau {
    id !: number;
    competence !: Competence;
    type !: Type;
    niveau_exige !: number;
}
