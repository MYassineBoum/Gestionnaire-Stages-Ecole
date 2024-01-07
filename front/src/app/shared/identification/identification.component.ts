import { Component } from '@angular/core';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { Injectable } from '@angular/core';
import { Professeur } from 'src/app/Classes/professeur';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Classes/etudiant';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent {
  userInput: string = '';
  professeur!:Professeur;
  etudiant!:Etudiant;
  
  constructor(private professeurService:ProfesseurService, private etudiantService:EtudiantService){
    this.etudiant = JSON.parse(localStorage.getItem("etudiantObject")!);
    this.professeur = JSON.parse(localStorage.getItem("professeurObject")!);
  }
  
  submit(): void {
    console.log("user input: ", this.userInput);
    this.getProfesseur();
    this.getEtudiant();
  }
  
  getProfesseur() {
    this.professeurService.getProfesseur(this.userInput);
  }
  getEtudiant(){
    this.etudiantService.getEtudiant(this.userInput);
  }
}
