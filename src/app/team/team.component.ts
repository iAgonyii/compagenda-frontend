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
    this.teamService.team.subscribe(team => {
      this.team = team;
    });
  }

  ngOnInit(): void {

  }

  inviteUser() {
    this.teamService.teamInviteUser(this.team.name, this.username);
  }

  isDisabled(): boolean {
    return !this.username;
  }

}
