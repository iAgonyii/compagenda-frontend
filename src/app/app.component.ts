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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'compagendafront';
  loggedIn: boolean;
  username: string;

  team: Team;

  constructor(private authService: AuthService, private authGuard: AuthGuard, private modalService: NgbModal,
              private teamService: TeamService) {

    authService.getLoggedIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    authService.getUsername.subscribe(username => this.username = username);

    teamService.getTeamOfUser(+localStorage.getItem('UserId')).subscribe(team => {
      if (team) {
        this.team = team;
        this.teamService.team = team;
        localStorage.setItem('TeamId', this.team.id.toString());
        console.log(this.team);
      }
    });
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



}
