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

  constructor(private authentificationService: AuthentificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.authentificationService.accessToken;
    if(!request.url.includes('/api/login')) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }

}
