import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tuteur } from 'src/app/Classes/tuteur';
import { TuteurService } from 'src/app/services/tuteur.service';
import { TuteurPopupComponent } from '../tuteur-popup/tuteur-popup.component';

@Component({
  selector: 'app-tuteur',
  templateUrl: './tuteur.component.html',
  styleUrls: ['./tuteur.component.scss']
})
export class TuteurComponent implements OnInit {

  listeTuteurs !: Tuteur[];
  searchTuteur = '';

  constructor(private tuteurService: TuteurService, private dialog: MatDialog) { 
    this.listeTuteurs = [];
  }

  ngOnInit(): void {
    this.fetchTuteurs();
  }

  fetchTuteurs() {
    this.tuteurService.fetchTuteurs().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeTuteurs = resp as Tuteur[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterTuteur() {
    const dialogBox = this.dialog.open(TuteurPopupComponent, {
      width: '500px',
    });

    dialogBox.afterClosed().subscribe(
      {
        next: () => {
          this.fetchTuteurs();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  modifierTuteur(tuteur: Tuteur) {
    this.tuteurService.modifierTuteur(tuteur).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchTuteurs();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  supprimerTuteur(no_tuteur: number) {
    this.tuteurService.supprimerTuteur(no_tuteur).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.fetchTuteurs();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
