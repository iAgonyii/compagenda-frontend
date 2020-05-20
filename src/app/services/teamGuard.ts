import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamGuard implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): boolean {
    if (+localStorage.getItem('TeamId') > 0) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
