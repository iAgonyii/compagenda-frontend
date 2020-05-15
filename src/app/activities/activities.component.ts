import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Activity} from '../models/activity';
import {ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activity: Activity;

  constructor(public activeModal: NgbActiveModal, private activityService: ActivityService) { }

  ngOnInit(): void {
  }

  saveChanges() {
    console.log(this.activity);
    this.activityService.editActivity(this.activity);
    this.activeModal.close();
  }

  deleteActivity() {
    this.activityService.deleteActivity(this.activity);
    this.activeModal.close();
  }
}
