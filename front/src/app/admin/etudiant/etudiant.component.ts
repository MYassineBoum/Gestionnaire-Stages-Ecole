import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  listeEtudiants : any = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.fetchEtudiants();
  }

  fetchEtudiants() {
    this.etudiantService.fetchEtudiants().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeEtudiants.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
