import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Etudiant } from 'src/app/Classes/etudiant';
import { Promo } from 'src/app/Classes/promo';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { EtudiantPopupComponent } from '../etudiant-popup/etudiant-popup.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  listeEtudiants !: Etudiant[];
  etudiant !: Etudiant;
  listePromos !: Promo[];
  promo !: Promo;
  anneePromo : string = "";
  searchEtudiant = '';

  constructor(private etudiantService: EtudiantService, private promotionService: PromotionService, private dialog: MatDialog) { 
    this.etudiant = new Etudiant();
    this.promo = new Promo();
    this.listeEtudiants = [];
    this.listePromos = [];
  }

  ngOnInit(): void {
    this.fetchEtudiants();
    this.fetchPromotions();
  }

  filterParPromo() {
    if (parseInt(this.anneePromo) == 0) {
      this.fetchEtudiants();
    } else if (this.anneePromo.toString() == "Toutes") {
      this.fetchEtudiants();
    }
    else {
      this.etudiantService.fetchEtudiantsParPromo(parseInt(this.anneePromo)).subscribe(
        {
          next: resp => {
            console.log(resp);
            this.listeEtudiants = resp as Etudiant[];
          },
          error: err => {
            console.log(err);
          }
        }
      );
    }
  }

  fetchPromotions() {
    this.promotionService.fetchPromotions().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listePromos = resp as Promo[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fetchEtudiants() {
    this.etudiantService.fetchEtudiants().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeEtudiants = resp as Etudiant[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterEtu() {
    const dialogBox = this.dialog.open(EtudiantPopupComponent, {
      width: '500px',
    });

    dialogBox.afterClosed().subscribe(
      {
        next: () => {
          this.promotionService.fetchPromotions().subscribe(
            {
              next: resp => {
                console.log(resp);
                this.listePromos = resp as Promo[];
              },
              error: err => {
                console.log(err);
              }
            }
          );
          this.fetchEtudiants();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  supprimerEtudiant(no_etudiant: number, promo: Promo) {
    this.etudiantService.supprimerEtudiant(no_etudiant).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchEtudiants();
          this.verifierPromo(promo);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  verifierPromo(newPromo: Promo) {
    this.promotionService.verifierPromotion(newPromo).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchPromotions();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  modifierEtudiant(etudiant: Etudiant) {
    this.etudiantService.modifierEtudiant(etudiant).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchEtudiants();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
