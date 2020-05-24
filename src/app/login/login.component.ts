import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from '../services/authGuard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  loginError: boolean;
  loginForm;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private authGuard: AuthGuard) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    authService.loginError.subscribe(loginError => this.loginError = loginError);
  }

  ngOnInit(): void {
    this.loggedIn = this.authGuard.isLoggedIn();
  }

  onSubmit(loginData) {
    this.authService.login(loginData.username, loginData.password);
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

}
