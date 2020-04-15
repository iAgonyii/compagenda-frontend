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

  ngOnInit(): void {
  }

}
