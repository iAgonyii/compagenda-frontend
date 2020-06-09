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

  team: any = {};
  username: string;
  isAdmin: boolean;

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {
    if (this.teamService.team) {
      this.teamService.team.subscribe(team => {
        this.team = team;
        if (this.team.teamMembers[0].id === +localStorage.getItem('UserId')) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        console.log(this.isAdmin);
        console.log(team);
      });
    }
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

  isMe(member: any): boolean {
    if (member.id === +localStorage.getItem('UserId')) {
      return true;
    } else {
      return false;
    }
  }
}
