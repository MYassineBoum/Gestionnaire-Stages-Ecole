import { Component, Input, OnInit } from '@angular/core';
import { Professeur } from '../Classes/professeur';
import { IdentificationComponent } from '../shared/identification/identification.component';
import { Etudiant } from '../Classes/etudiant';

@Component({
  selector: 'app-user-interface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserInterfaceComponent implements OnInit {
  professeur!: Professeur;
  etudiant!:Etudiant;

  constructor(private iden:IdentificationComponent) {
  }
  
  ngOnInit() {
    this.professeur = JSON.parse(localStorage.getItem('professeurObject')!) as Professeur;  
    this.etudiant = JSON.parse(localStorage.getItem('etudiantObject')!) as Etudiant;
  }
}
