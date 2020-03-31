import { Component, OnInit } from '@angular/core';
import {Activity} from '../models/activity';
import {ActivitiesComponent} from '../activities/activities.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivityAddComponent} from '../activities/activity-add/activity-add.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddModal() {
    const modalRef = this.modalService.open(ActivityAddComponent);
  }
}
