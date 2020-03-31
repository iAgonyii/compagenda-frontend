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
    this.activitiesUrl = 'http://localhost:8080/compagenda/api/activity';
  }

  addActivity(activity: Activity): void {
    this.httpClient.post<Activity>(this.activitiesUrl, activity).subscribe();
  }

  editActivity(activity: Activity): void {
    this.httpClient.post<Activity>(this.activitiesUrl + '/' + activity.id, activity).subscribe();
  }

  getActivities(userId: number): Observable<Activity[]> {
    const url = this.activitiesUrl + '?userId=' + localStorage.getItem('userId');
    return this.httpClient.get<Activity[]>(url);
  }
}
