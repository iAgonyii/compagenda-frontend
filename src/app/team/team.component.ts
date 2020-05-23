import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../models/team';
import {ActivatedRoute} from '@angular/router';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team;
  username: string;

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {
    this.team = this.teamService.team;
    console.log(this.team);
  }

  ngOnInit(): void {

  }

  inviteUser() {
    this.teamService.teamInviteUser(this.team.id, this.username);
  }

  isDisabled(): boolean {
    return !this.username;
  }

}
