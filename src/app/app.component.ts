import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {getHelper} from '@angular/core/schematics/migrations/renderer-to-renderer2/helpers';
import {AuthGuard} from './services/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'compagendafront';

  loggedIn: boolean;

  loginForm;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private authGuard: AuthGuard) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.loggedIn = this.authGuard.isLoggedIn();
    console.log(localStorage.getItem('UserId'));
    console.log(localStorage.getItem('Token'));
    console.log(this.loggedIn);
  }

  onSubmit(loginData) {
    console.log(loginData);
    this.authService.login(loginData.username, loginData.password);
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }


}
