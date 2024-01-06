import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  listePromos : any = [];

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.fetchPromotions();
  }

  fetchPromotions() {
    this.promotionService.fetchPromotions().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listePromos.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterPromo() {
    
  }
}
