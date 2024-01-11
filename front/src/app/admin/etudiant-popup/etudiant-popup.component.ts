import { Component, OnInit, inject } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/Classes/etudiant';
import { Promo } from 'src/app/Classes/promo';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { EtudiantComponent } from '../etudiant/etudiant.component';

@Component({
  selector: 'app-etudiant-popup',
  templateUrl: './etudiant-popup.component.html',
  styleUrls: ['./etudiant-popup.component.scss']
})
export class EtudiantPopupComponent implements OnInit {

  listeEtudiants !: Etudiant[];
  newEtu !: Etudiant;
  listePromos !: Promo[];
  promo !: Promo;

  constructor(private etudiantService: EtudiantService, private promotionService: PromotionService, private toastr: ToastrService) { 
    this.newEtu = new Etudiant();
    this.promo = new Promo();
    this.listePromos = [];
    this.listeEtudiants = [];
  }


  ngOnInit(): void {
    this.fetchPromos();
    this.fetchEtudiants();
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

  fetchPromos() {
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

  approuverAjout() {
    this.newEtu.promo = this.promo;
    // console.log("Dyalna : " + JSON.stringify(this.newEtu));
    if(this.newEtu.nom_etudiant == null || this.newEtu.prenom_etudiant == null || this.newEtu.adresse_etudiant == null || this.newEtu.email_etudiant == null || this.newEtu.telephone_etudiant == null || this.newEtu.promo.annee_promo == null || this.newEtu.code_postal_etudiant == null || this.newEtu.ville_etudiant == null || this.newEtu.date_naissance_etudiant == null || this.newEtu.sexe_etudiant == null || this.newEtu.mention_etudiant == null || this.newEtu.qualite_etudiant == null) {
      this.toastr.toastrConfig.positionClass = 'toast-center-center';
      this.toastr.warning('Veuillez remplir tous les champs!');
    } else {
      this.etudiantService.ajouterEtudiant(this.newEtu).subscribe(
        {
          next: resp => {
            console.log(resp);
            alert("Etudiant ajouté!");
            // this.newEtu.promo.nb_etudiants++;
            this.promotionService.modifierPromotion(this.newEtu.promo).subscribe(
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
}
