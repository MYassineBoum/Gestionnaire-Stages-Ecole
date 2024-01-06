import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.scss']
})
export class ProfesseurComponent implements OnInit {

  listeProfesseurs : any = [];

  constructor(private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.fetchProfesseurs();
  }

  fetchProfesseurs() {
    this.professeurService.fetchProfesseurs().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeProfesseurs.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
