import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  isLoggedIn(): boolean {
    if (localStorage.getItem('userId')) {
      return true;
    } else {
      return false;
    }
  }
}
