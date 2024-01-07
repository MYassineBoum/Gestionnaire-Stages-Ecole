import { HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private authentificationService: AuthentificationService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    let token = this.authentificationService.accessToken;
    let request = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(request);
  }
}
