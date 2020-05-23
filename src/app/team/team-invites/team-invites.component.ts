import { Component, OnInit } from '@angular/core';
import {Invite} from '../../models/invite';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-team-invites',
  templateUrl: './team-invites.component.html',
  styleUrls: ['./team-invites.component.css']
})
export class TeamInvitesComponent implements OnInit {

  teamInvites: Invite[] = [];

  constructor(private teamService: TeamService) {
    this.teamService.getTeamInvites(+localStorage.getItem('UserId')).subscribe(invites => {
      this.teamInvites = invites;
      console.log(this.teamInvites);
    });
  }

  ngOnInit(): void {
  }

}
