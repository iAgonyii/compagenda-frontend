import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {getHelper} from '@angular/core/schematics/migrations/renderer-to-renderer2/helpers';
import {AuthGuard} from './services/authGuard';
import {ActivityAddComponent} from './activities/activity-add/activity-add.component';
import {TeamCreateComponent} from './team/team-create/team-create.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Team} from './models/team';
import {TeamService} from './services/team.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'compagendafront';
  loggedIn: boolean;
  username: string;
  isAdmin: boolean;

  team: Team;

  constructor(private authService: AuthService, private authGuard: AuthGuard, private modalService: NgbModal,
              private teamService: TeamService, private router: Router) {

    authService.getLoggedIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    authService.getUsername.subscribe(username => this.username = username);

    // For after logins
    authService.userIdSet.subscribe(res => {
      if (res === true) {
        this.teamService.getTeamOfUser(+localStorage.getItem('UserId'));
        this.teamService.team.subscribe(team => {
          this.team = team;
          if (this.team.teamMembers[0].id === +localStorage.getItem('UserId')) {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
          this.teamService.setTeamIdLocal(team.id.toString());
          console.log('set team id');
          // localStorage.setItem('TeamId', team.id.toString());
        });
      }
    });

    // For refreshes or when session is already active
    if (+localStorage.getItem('UserId') > 0) {
      this.teamService.getTeamOfUser(+localStorage.getItem('UserId'));
      this.teamService.team.subscribe(team => {
        this.team = team;
        if (this.team.teamMembers[0].id === +localStorage.getItem('UserId')) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        this.teamService.setTeamIdLocal(team.id.toString());
        // localStorage.setItem('TeamId', team.id.toString());
      });
    }
  }

  ngOnInit(): void {
    this.loggedIn = this.authGuard.isLoggedIn();
    this.username = localStorage.getItem('Username');
  }

  logout() {
    this.loggedIn = false;
    localStorage.clear();
    window.location.reload();
  }

  openTeamCreateModal() {
    const modalRef = this.modalService.open(TeamCreateComponent);
  }

  deleteTeam() {
    if (confirm('Are you sure to delete your team: ' + this.team.name)) {
      this.teamService.deleteTeam(this.team.id);
      localStorage.removeItem('TeamId');
      window.location.reload();
    }
  }

  leaveTeam() {
    if (confirm('Are you sure you want to leave team ' + this.team.name)) {
      // We can recycle this method because it does the same thing.
      this.teamService.kickUserFromTeam(+localStorage.getItem('UserId'), this.team.id);
      localStorage.removeItem('TeamId');
      window.location.reload();
    }
  }


}
