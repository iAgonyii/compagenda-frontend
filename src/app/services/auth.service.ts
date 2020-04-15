import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'url-search-params-polyfill';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string;

  constructor(private httpClient: HttpClient) {
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

    console.log(options.headers);

    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(this.authUrl + '/login', body.toString(), options).subscribe((response: HttpResponse<any>) => {
      if (response.headers.get('Authorization')) {
        const token = response.headers.get('Authorization')
        localStorage.setItem('Token', token);

        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        localStorage.setItem('UserId',  decodedToken.sub);

        return true;
      } else {
        return false;
      }
    });
  }
}
