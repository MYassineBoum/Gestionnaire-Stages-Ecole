import { Component } from '@angular/core';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { Injectable } from '@angular/core';
import { Professeur } from 'src/app/Classes/professeur';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Classes/etudiant';
import { Router } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';
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
  b1: boolean = false;
  b2: boolean = false;
  
  constructor(private router: Router, private professeurService:ProfesseurService, private etudiantService:EtudiantService){ 
    
  }
  waitOneSecond(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }
  async submit() {
    console.log("user input: ", this.userInput);
    this.getProfesseur();
    this.getEtudiant();
    await this.waitOneSecond();
    this.router.navigateByUrl('/userinterface');
  }
  
  getProfesseur() {
    this.professeurService.getProfesseur(this.userInput).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          localStorage.setItem("professeurObject", JSON.stringify(resp));
          this.b1 = true;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
  getEtudiant(){
    this.etudiantService.getEtudiant(this.userInput).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          localStorage.setItem("etudiantObject", JSON.stringify(resp));
          this.b2 = true;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
}
