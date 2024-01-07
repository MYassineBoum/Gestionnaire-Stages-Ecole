import { AuthentificationService } from './../services/authentification.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes('/api/login') && !request.url.includes('/api/etudiant/get') && !request.url.includes('/api/professeur/get')) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }

}
