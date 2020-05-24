import { Component, OnInit } from '@angular/core';
import {ActivityAddComponent} from '../../activities/activity-add/activity-add.component';
import {TeamActivityAddComponent} from './team-activity-add/team-activity-add.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-agenda',
  templateUrl: './team-agenda.component.html',
  styleUrls: ['./team-agenda.component.css']
})
export class TeamAgendaComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddModal() {
    const modalRef = this.modalService.open(TeamActivityAddComponent);
  }

}
