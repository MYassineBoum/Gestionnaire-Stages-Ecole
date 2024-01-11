import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StageService } from 'src/app/services/stage.service';
import { StagePopupComponent } from '../stage-popup/stage-popup.component';
import { Stages } from 'src/app/Classes/stages';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  listeStages !: Stages[];
  searchStage = '';

  constructor(private stageService: StageService, private dialog: MatDialog) { 
    this.listeStages = [];
  }

  ngOnInit(): void {
    this.fetchStages();
  }

  fetchStages() {
    this.stageService.fetchStages().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeStages = resp as Stages[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ajouterStage() {
    const dialogBox = this.dialog.open(StagePopupComponent, {
      width: '500px',
    });

    dialogBox.afterClosed().subscribe(
      {
        next: () => {
          this.fetchStages();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  modifierStage(stage: Stages) {
    this.stageService.modifierStage(stage).subscribe(
      {
        next: () => {
          alert("Stage modifié!");
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  supprimerStage(no_stage: number) {
    this.stageService.supprimerStage(no_stage).subscribe(
      {
        next: () => {
          alert("Stage supprimé!");
          this.fetchStages();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
