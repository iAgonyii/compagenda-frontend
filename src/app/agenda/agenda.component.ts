import { Component, OnInit } from '@angular/core';
import {Activity} from '../models/activity';
import {ActivitiesComponent} from '../activities/activities.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivityAddComponent} from '../activities/activity-add/activity-add.component';
import {AuthGuard} from '../services/authGuard';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private modalService: NgbModal, private authGuard: AuthGuard) { }

  loggedIn: boolean;

  ngOnInit(): void {
    this.loggedIn = this.authGuard.isLoggedIn();
  }

  openAddModal() {
    const modalRef = this.modalService.open(ActivityAddComponent);
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
  }
}
