import { Router } from '@angular/router';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private authentificationService: AuthentificationService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  loginJWT() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.authentificationService.loginJWT(username, password).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.authentificationService.loadJWT(resp);
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
