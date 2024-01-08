import { Component, Input } from '@angular/core';
import { Professeur } from '../Classes/professeur';
import { IdentificationComponent } from '../shared/identification/identification.component';
import { Etudiant } from '../Classes/etudiant';

@Component({
  selector: 'app-user-interface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserInterfaceComponent {
  professeur!: Professeur;
  etudiant!:Etudiant;

  constructor(private iden:IdentificationComponent) {
    this.professeur = new Professeur();
    this.etudiant = new Etudiant();
    this.professeur = this.iden.professeur;
    this.etudiant = this.iden.etudiant;
  }
}
