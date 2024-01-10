import { Component } from '@angular/core';
import { Entreprise } from 'src/app/Classes/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprise-popup',
  templateUrl: './entreprise-popup.component.html',
  styleUrls: ['./entreprise-popup.component.scss']
})
export class EntreprisePopupComponent {
  newEnt !: Entreprise;

  constructor(private entrepriseService: EntrepriseService) { 
    this.newEnt = new Entreprise();
  }

  approuverAjout() {
    this.entrepriseService.ajouterEntreprise(this.newEnt).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Entreprise ajoutée!");
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
