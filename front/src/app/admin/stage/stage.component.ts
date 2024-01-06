import { Component, OnInit } from '@angular/core';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  listeStages : any = [];

  constructor(private stageService: StageService) { }

  ngOnInit(): void {
    this.fetchStages();
  }

  fetchStages() {
    this.stageService.fetchStages().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeStages.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
