import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Activity} from '../models/activity';
import {Team} from '../models/team';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl: string;
  @Output() getTeam: EventEmitter<any> = new EventEmitter();
  team: Team;

  constructor(private httpClient: HttpClient) {
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

  getTeamOfUser(userId: number): Observable<Team> {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    const url = this.teamUrl + '?userId=' + userId;
    let obTeam = this.httpClient.get<Team>(url, options);
    obTeam.subscribe(team => {
      this.team = team;
    });
    return obTeam;
  }

  deleteTeam(teamId: number): void {

    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    const url = this.teamUrl + '/delete';
    this.httpClient.post(url, teamId, options).subscribe();
  }
}
