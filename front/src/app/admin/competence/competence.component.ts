import { Component, OnInit } from '@angular/core';
import { Competence } from 'src/app/Classes/competence';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  listeCompetences !: Competence[];

  constructor(private competenceService: CompetenceService) { 
    this.listeCompetences = [];
  }

  ngOnInit(): void {
    this.fetchCompetences();
  }

  fetchCompetences() {
    this.competenceService.fetchCompetences().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeCompetences = resp as Competence[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
