import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Activity} from '../../../models/activity';
import {ActivityService} from '../../../services/activity.service';

@Component({
  selector: 'app-team-activity-add',
  templateUrl: './team-activity-add.component.html',
  styleUrls: ['./team-activity-add.component.css']
})
export class TeamActivityAddComponent implements OnInit {

  activity: Activity;

  constructor(public activeModal: NgbActiveModal, private activityService: ActivityService) {
    this.activity = new Activity();
  }

  ngOnInit(): void {
  }

  addActivity(): void {
    this.activity.userId = +localStorage.getItem('UserId');
    this.activity.teamId = +localStorage.getItem('TeamId');
    console.log(this.activity);
    this.activityService.addActivity(this.activity);
    this.activity.category = null;
    this.activity.starttime = null;
    this.activity.endtime = null;
    this.activeModal.close();
    window.location.reload();
  }

  isDisabled(): boolean {
    return !this.activity.category || !this.activity.starttime || !this.activity.endtime;
  }

}
