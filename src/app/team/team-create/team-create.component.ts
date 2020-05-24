import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Team} from '../../models/team';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  team: Team;

  constructor(public activeModal: NgbActiveModal, private teamService: TeamService) {
    this.team = new Team();
  }

  ngOnInit(): void {
  }

  createTeam() {
    this.teamService.createTeam(this.team.name, +localStorage.getItem('UserId'));
  }
}
