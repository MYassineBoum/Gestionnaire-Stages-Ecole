import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  listeTypes : any = [];

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.fetchTypes();
  }

  fetchTypes() {
    this.typeService.fetchTypes().subscribe(
      {
        next: resp => {
          console.log(resp);
          this.listeTypes.push(resp);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
