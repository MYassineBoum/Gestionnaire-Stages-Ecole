import { Statistiques } from 'src/app/Classes/statistiques';
import { StatistiquesService } from './../../services/statistiques.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  statistiques!: Statistiques;

  constructor(private statistiquesService: StatistiquesService) { 
    this.statistiques = new Statistiques();
  }

  ngOnInit(): void {
    this.getStatistiques();
  }

  getStatistiques() {
    this.statistiquesService.getStatistiques().subscribe(
      {
        next: (resp) => {
          console.log(resp);
          this.statistiques = resp as Statistiques;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );;
  }

}
