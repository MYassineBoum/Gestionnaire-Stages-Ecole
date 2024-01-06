import { Component } from '@angular/core';
import { Professeur } from 'src/app/Classes/professeur';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-professeur-popup',
  templateUrl: './professeur-popup.component.html',
  styleUrls: ['./professeur-popup.component.scss']
})
export class ProfesseurPopupComponent {
  
  newProf !: Professeur;

  constructor(private professeurService: ProfesseurService) { 
    this.newProf = new Professeur();
  }

  approuverAjout() {
    this.professeurService.ajouterProfesseur(this.newProf).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Professeur ajouté!");
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
