import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl = "http://localhost:9092/api/";
  accessToken !: string;
  isAuthenticated !: boolean;

  constructor(private httpClient: HttpClient) { 
    this.isAuthenticated = false;
  }

  public loginJWT(username: string, password: string) {
    let httpParams = new HttpParams().set('username', username).set('password', password);
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    return this.httpClient.post(this.baseUrl + 'login', httpParams, options);
  }

  public loadJWT(resp: any) {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
    this.accessToken = resp['access-token'];
    localStorage.setItem('token', this.accessToken);
  }

}
