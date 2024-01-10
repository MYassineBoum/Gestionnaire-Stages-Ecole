import { Component } from '@angular/core';
import { Tuteur } from 'src/app/Classes/tuteur';
import { TuteurService } from 'src/app/services/tuteur.service';

@Component({
  selector: 'app-tuteur-popup',
  templateUrl: './tuteur-popup.component.html',
  styleUrls: ['./tuteur-popup.component.scss']
})
export class TuteurPopupComponent {

  newTut !: Tuteur;

  constructor(private tuteurService: TuteurService) { 
    this.newTut = new Tuteur();
  }

  approuverAjout() {
    this.tuteurService.ajouterTuteur(this.newTut).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Tuteur ajoutée!");
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
