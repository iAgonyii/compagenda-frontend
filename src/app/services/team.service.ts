import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Activity} from '../models/activity';
import {Team} from '../models/team';
import {observable, Observable, of} from 'rxjs';
import {Invite} from '../models/invite';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl: string;
  @Output() getTeam: EventEmitter<any> = new EventEmitter();
  @Output() teamIdSet: EventEmitter<any> = new EventEmitter();
  team: Observable<Team>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.teamUrl = 'http://localhost:8080/team';
  }

  createTeam(name: string, owner: number): void {
    const body = new URLSearchParams();
    body.set('name', name);
    body.set('user', owner.toString());

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                .set('Authorization', localStorage.getItem('Token')),
      observe: 'response'
    };

    // @ts-ignore
    this.httpClient.post(this.teamUrl, body.toString(), options).subscribe(
      (response: HttpResponse<201>) => {
        console.log('201 - Created');
        window.location.reload();
      },
      (response: HttpResponse<409>) => {
        // To do: error message when 409
        console.log('409 - Already exists');
      });
  }

  getTeamOfUser(userId: number): void {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    const url = this.teamUrl + '?userId=' + userId;
    this.team = this.httpClient.get<Team>(url, options);
  }

  deleteTeam(teamId: number): void {

    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    const url = this.teamUrl + '/delete';
    this.httpClient.post(url, teamId, options).subscribe();
  }

  teamInviteUser(teamName: string, username: string) {
    const body = new URLSearchParams();
    body.set('teamName', teamName);
    body.set('username', username);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                .set('Authorization', localStorage.getItem('Token')),
      observe: 'response'
    };

    // @ts-ignore
    this.httpClient.post(this.teamUrl + '/invite', body.toString(), options).subscribe(
      (response: HttpResponse<200>) => {
        console.log('201 - Invited');
        // window.location.reload();
      },
      (response: HttpResponse<404>) => {
        // To do: error message when 404
        console.log('404 - User not found');
      });
  }

  getTeamInvites(userId: number): Observable<Invite[]> {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    const url = this.teamUrl + '/invite?userId=' + userId;
    return this.httpClient.get<Invite[]>(url, options);
  }

  acceptInviteJoinTeam(invite: Invite) {
    this.updateInviteStatus(invite);

    const body = new URLSearchParams();
    body.set('teamName', invite.teamName);
    body.set('userId', invite.userId.toString());

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', localStorage.getItem('Token')),
      observe: 'response'
    };

    // @ts-ignore
    this.httpClient.post(this.teamUrl + '/join', body.toString(), options).subscribe(res => {
      window.location.reload();
    });
  }

  updateInviteStatus(invite: Invite) {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    this.httpClient.post<Activity>(this.teamUrl +  '/invite/update', invite, options).subscribe();
  }

  kickUserFromTeam(userId: number, teamId: number) {
    const body = new URLSearchParams();
    body.set('userId', userId.toString());
    body.set('teamId', teamId.toString());

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', localStorage.getItem('Token')),
      observe: 'response'
    };

    // @ts-ignore
    this.httpClient.post(this.teamUrl + '/kick', body.toString(), options).subscribe();
  }

  setTeamIdLocal(id: string) {
    localStorage.setItem('TeamId', id);
    this.teamIdSet.emit(true);
  }
}
