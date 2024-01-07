import { Component, OnInit } from '@angular/core';
import { TuteurService } from 'src/app/services/tuteur.service';

@Component({
  selector: 'app-tuteur',
  templateUrl: './tuteur.component.html',
  styleUrls: ['./tuteur.component.scss']
})
export class TuteurComponent implements OnInit {

  listeTuteurs : any = [];

  constructor(private tuteurService: TuteurService) { }

  ngOnInit(): void {
    this.fetchTuteurs();
  }

  fetchTuteurs() {
    this.tuteurService.fetchTuteurs().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeTuteurs.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
