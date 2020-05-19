import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Activity} from '../models/activity';
import {ObjectUnsubscribedError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activitiesUrl: string;

  constructor(private httpClient: HttpClient) {
    this.activitiesUrl = 'http://localhost:8080/activity';
  }

  addActivity(activity: Activity): void {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    this.httpClient.post<Activity>(this.activitiesUrl, activity, options).subscribe();
  }

  editActivity(activity: Activity): void {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    this.httpClient.post<Activity>(this.activitiesUrl, activity, options).subscribe();
  }

  getActivities(userId: number): Observable<Activity[]> {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };
    const url = this.activitiesUrl + '?userId=' + userId;
    return this.httpClient.get<Activity[]>(url, options);
  }

  deleteActivity(activity: Activity): void {
    const options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('Token'))
    };

    this.httpClient.post<Activity>(this.activitiesUrl + '/delete', activity, options).subscribe();
  }
}
