import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { ProfesseurPopupComponent } from '../professeur-popup/professeur-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Professeur } from 'src/app/Classes/professeur';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.scss']
})
export class ProfesseurComponent implements OnInit {

  listeProfesseurs !: Professeur[];

  constructor(private professeurService: ProfesseurService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchProfesseurs();
  }

  fetchProfesseurs() {
    this.professeurService.fetchProfesseurs().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeProfesseurs = resp as Professeur[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterProf() {
    this.dialog.open(ProfesseurPopupComponent);
  }
  
}
