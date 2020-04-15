import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  isLoggedIn(): boolean {
    const token = localStorage.getItem('Token');
    if (token) {
      const helper = new JwtHelperService();
      if (!helper.isTokenExpired(token)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
