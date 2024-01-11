import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entreprise } from 'src/app/Classes/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { EntreprisePopupComponent } from '../entreprise-popup/entreprise-popup.component';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  listeEntreprises !: Entreprise[];
  searchEntreprise = '';

  constructor(private entrepriseService: EntrepriseService, private dialog: MatDialog) { 
    this.listeEntreprises = [];
  }

  ngOnInit(): void {
    this.fetchEntreprises();
  }

  fetchEntreprises() {
    this.entrepriseService.fetchEntreprises().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeEntreprises = resp as Entreprise[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterEntreprise() {
    const dialogBox = this.dialog.open(EntreprisePopupComponent, {
      width: '500px',
    });

    dialogBox.afterClosed().subscribe(
      {
        next: () => {
          this.fetchEntreprises();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  modifierEntreprise(entreprise: Entreprise) {
    this.entrepriseService.modifierEntreprise(entreprise).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchEntreprises();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  supprimerEntreprise(no_entreprise: number) {
    this.entrepriseService.supprimerEntreprise(no_entreprise).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchEntreprises();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
