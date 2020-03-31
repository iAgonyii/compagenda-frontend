import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'compagendafront';
  userId: number;
  loggedIn: boolean;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.loggedIn = true;
      this.userId = +localStorage.getItem('userId');
    }
  }

  login(id: number) {
    localStorage.clear();
    localStorage.setItem('userId', JSON.stringify(this.userId));
    this.loggedIn = true;
    window.location.reload();
  }

  logout() {
    localStorage.clear();
    this.userId = null;
    this.loggedIn = false;
    window.location.reload();
  }


}
