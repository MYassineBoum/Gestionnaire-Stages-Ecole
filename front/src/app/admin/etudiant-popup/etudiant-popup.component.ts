import { Component } from '@angular/core';
import { Etudiant } from 'src/app/Classes/etudiant';
import { Promo } from 'src/app/Classes/promo';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-etudiant-popup',
  templateUrl: './etudiant-popup.component.html',
  styleUrls: ['./etudiant-popup.component.scss']
})
export class EtudiantPopupComponent {

  newEtu !: Etudiant;

  constructor(private etudiantService: EtudiantService, private promotionService: PromotionService) { 
    this.newEtu = new Etudiant();
  }

  approuverAjout() {
    this.etudiantService.ajouterEtudiant(this.newEtu).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Etudiant ajouté!");
          this.promotionService.modifierPromotion(this.newEtu.annee_promo).subscribe(
            {
              next: resp => {
                console.log(resp);
              },
              error: err => {
                console.log(err);
              }
            }
          );
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
