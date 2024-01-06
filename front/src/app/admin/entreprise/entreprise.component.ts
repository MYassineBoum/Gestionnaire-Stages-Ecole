import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  listeEntreprises : any = [];

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.fetchEntreprises();
  }

  fetchEntreprises() {
    this.entrepriseService.fetchEntreprises().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeEntreprises.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
