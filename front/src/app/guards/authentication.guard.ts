import { inject } from '@angular/core';
import { AuthentificationService } from './../services/authentification.service';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if(localStorage.getItem('isAuthenticated') === 'true') {
    return true;
  } else {
    router.navigate(['/authentification']);
    return false;
  }
};
