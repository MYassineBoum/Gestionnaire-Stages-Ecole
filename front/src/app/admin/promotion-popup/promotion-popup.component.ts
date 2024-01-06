import { Component } from '@angular/core';
import { Promo } from 'src/app/Classes/promo';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrls: ['./promotion-popup.component.scss']
})
export class PromotionPopupComponent {

  newPromo !: Promo;

  constructor(private promoService: PromotionService) { 
    this.newPromo = new Promo();
  }

  approuverAjout() {
    this.promoService.ajouterPromotion(this.newPromo).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Promotion ajoutée!");
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
