import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLoggedIn()) {
    return true;
  } else {
    inject(Router).navigate(['/']);
    return false;
  }
};

