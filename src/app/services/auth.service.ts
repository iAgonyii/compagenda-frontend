import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'url-search-params-polyfill';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {isNumeric} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string;
  private userUrl: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.authUrl = 'http://localhost:8080/';
    this.userUrl = 'http://localhost:8080/user';
  }

  @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();
  @Output() getUsername: EventEmitter<any> = new EventEmitter();
  @Output() loginError: EventEmitter<any> = new EventEmitter();
  @Output() userIdSet: EventEmitter<any> = new EventEmitter();

  login(username: string, password: string) {
    // const body = new URLSearchParams();
    // body.set('username', username);
    // body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      observe: 'response'
    };

    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.httpClient.post<any>(this.authUrl + 'login', {username, password}, options).subscribe(
      (response: HttpResponse<200>) => {

        // Set tokens and local variables
        const token = response.headers.get('Authorization');
        localStorage.setItem('Token', token);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        // localStorage.setItem('UserId',  decodedToken.sub);
        localStorage.setItem('Username', decodedToken.sub);
        this.getLoggedIn.emit(true);
        this.getUsername.emit(username);

        const options2 = {
          headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
        };

        this.httpClient.get(this.userUrl + '/getId/' + decodedToken.sub, options2).subscribe(res => {
          if (res != null && isNumeric(res)) {
              localStorage.setItem('UserId', res.toString());
              console.log(localStorage.getItem('UserId'));
              this.userIdSet.emit(true);
              this.router.navigate(['/home']);
          }
        });



        console.log('Succesfully logged in and authorized');
      },

      (response: HttpResponse<403>) => {
        console.log('403 - Incorrect credentials');
        this.loginError.emit(true);
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
    this.httpClient.post(this.authUrl + 'auth/register', body.toString(), options).subscribe(
      (response: HttpResponse<201>) => {
          console.log('201 - Succesfully registered user');
          this.router.navigate(['/login']);
          return true;
        },
      (errorResponse: HttpResponse<409>) => {
        // To do: error message for conflicts.
          console.log('409 - Already exists');
          return false;
    });

  }
}
