import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/Classes/type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  listeTypes !: Type[];

  constructor(private typeService: TypeService) { 
    this.listeTypes = [];
  }

  ngOnInit(): void {
    this.fetchPromotions();
  }

  fetchPromotions() {
    this.typeService.fetchTypes().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeTypes = resp as Type[];
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
