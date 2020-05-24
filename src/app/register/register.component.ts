import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from '../services/authGuard';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  loggedIn: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private authGuard: AuthGuard, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.loggedIn = this.authGuard.isLoggedIn();
  }

  onSubmit(registerData) {
    this.authService.register(registerData.username, registerData.email, registerData.password);
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
