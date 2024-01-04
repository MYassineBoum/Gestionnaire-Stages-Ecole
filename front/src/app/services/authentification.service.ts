import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl = "http://localhost:9092/api/";

  constructor(private httpClient: HttpClient) { }

  public loginJWT(username: string, password: string) {
    let httpParams = new HttpParams().set('username', username).set('password', password);
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    return this.httpClient.post(this.baseUrl + 'login', httpParams, options);
  }

}
