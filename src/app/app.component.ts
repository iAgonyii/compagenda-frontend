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
  username: string;

  constructor(private authService: AuthService, private authGuard: AuthGuard) {
    authService.getLoggedIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    authService.getUsername.subscribe(username => this.username = username);
  }

  ngOnInit(): void {
    this.loggedIn = this.authGuard.isLoggedIn();
    this.username = localStorage.getItem('Username');
  }

  logout() {
    this.loggedIn = false;
    localStorage.clear();
    window.location.reload();
  }



}
