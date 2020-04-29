import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

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

  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
