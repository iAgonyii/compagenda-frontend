import {Component, OnInit} from '@angular/core';
import {Invite, InviteStatusEnum} from '../../models/invite';
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

  accept(invite: Invite) {
    if (confirm('Confirm to accept the invitation and join team ' + invite.teamName)) {
      invite.status = InviteStatusEnum.Accepted;
      this.teamService.acceptInviteJoinTeam(invite);
      window.location.reload();
    }
  }

  reject(invite: Invite) {
    if (confirm('Confirm to reject the invitation from team ' + invite.teamName)) {
      invite.status = InviteStatusEnum.Rejected;
      this.teamService.updateInviteStatus(invite);
      window.location.reload();
    }
  }

  hasTeam(): boolean {
    return localStorage.getItem('TeamId') !== null;
  }

}
