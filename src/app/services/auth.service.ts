import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'url-search-params-polyfill';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.authUrl = 'http://localhost:8080/compagenda/api/auth';
  }

  login(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      observe: 'response'
    };

    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(this.authUrl + '/login', body.toString(), options).subscribe(
      (response: HttpResponse<200>) => {

        // Set tokens and local variables
        const token = response.headers.get('Authorization')
        localStorage.setItem('Token', token);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        localStorage.setItem('UserId',  decodedToken.sub);

        this.router.navigate(['/home']);
        console.log('Succesfully logged in and authorized');
        return true;
      },
      (response: HttpResponse<401>) => {
        console.log('401 - Incorrect credentials');
        return false;
      });
  }

  register(username: string, email: string, password: string) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('email', email);
    body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      observe: 'response'
    };

    // @ts-ignore
    this.httpClient.post(this.authUrl + '/register', body.toString(), options).subscribe(
      (response: HttpResponse<201>) => {
          console.log('201 - Succesfully registered user');
          this.router.navigate(['/login']);
          return true;
        },
      (errorResponse: HttpResponse<409>) => {
          console.log('409 - Already exists');
          return false;
    });

  }
}
