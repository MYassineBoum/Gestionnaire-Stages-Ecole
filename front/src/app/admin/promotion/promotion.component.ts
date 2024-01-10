import { PromotionPopupComponent } from './../promotion-popup/promotion-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Promo } from 'src/app/Classes/promo';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  listePromos !: Promo[];

  constructor(private promotionService: PromotionService, private dialog: MatDialog) { 
    this.listePromos = [];
  }

  ngOnInit(): void {
    this.fetchPromotions();
  }

  fetchPromotions() {
    this.promotionService.fetchPromotions().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listePromos = resp as Promo[];
          this.sortPromotions();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterPromo() {
    const dialogBox = this.dialog.open(PromotionPopupComponent);
    dialogBox.afterClosed().subscribe(
      {
        next: () => {
          this.fetchPromotions();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  sortPromotions() {
    this.listePromos.sort((a, b) => b.annee_promo - a.annee_promo);
  }

}