import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/Classes/professeur';
import { Promo } from 'src/app/Classes/promo';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrls: ['./promotion-popup.component.scss']
})
export class PromotionPopupComponent implements OnInit {

  newPromo !: Promo;
  listeProfesseurs !: Professeur[];
  professeur !: Professeur;

  constructor(private promoService: PromotionService, private professeurService: ProfesseurService) { 
    this.newPromo = new Promo();
    this.listeProfesseurs = [];
    this.professeur = new Professeur();
  }

  ngOnInit(): void {
      this.fetchProfesseurs();
  }

  approuverAjout() {
    this.newPromo.professeur = this.professeur;
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

  fetchProfesseurs() {
    this.professeurService.fetchProfesseurs().subscribe(
      {
        next: resp => {
          this.listeProfesseurs = resp as Professeur[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
