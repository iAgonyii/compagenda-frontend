import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../models/team';
import {ActivatedRoute} from '@angular/router';
import {TeamService} from '../services/team.service';
import {User} from '../models/user';

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
    if (confirm('Confirm to send an invite to ' + this.username)) {
      this.teamService.teamInviteUser(this.team.name, this.username);
      this.username = '';
    }
  }

  isDisabled(): boolean {
    return !this.username;
  }

  kick(member: any) {
    if (confirm('Confirm to kick this member from your team')) {
      this.teamService.kickUserFromTeam(member.id, this.team.id);
      const index = this.team.teamMembers.indexOf(member, 0);
      this.team.teamMembers.splice(index, 1);
    }
  }
}
