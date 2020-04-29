import { Component, OnInit } from '@angular/core';
import {Activity} from '../../models/activity';
import {ActivityService} from '../../services/activity.service';
import {AuthGuard} from '../../services/authGuard';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivityListComponent} from '../activity-list/activity-list.component';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  activity: Activity;

  constructor(private activityService: ActivityService, public authGuard: AuthGuard, public activeModal: NgbActiveModal) {
    this.activity = new Activity();
  }

  ngOnInit(): void {

  }

  addActivity(): void {
    this.activity.userId = +localStorage.getItem('UserId');
    console.log(this.activity);
    this.activityService.addActivity(this.activity);
    this.activity.category = null;
    this.activity.starttime = null;
    this.activity.endtime = null;
    this.activeModal.close();
    // window.location.reload();
  }

  isDisabled(): boolean {
    return !this.activity.category || !this.activity.starttime || !this.activity.endtime;
  }
}
