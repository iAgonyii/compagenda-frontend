import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Activity} from '../models/activity';
import {ActivityService} from '../services/activity.service';
import {Note} from '../models/note';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activity: any = {};
  newNote: any = {};


  constructor(public activeModal: NgbActiveModal, private activityService: ActivityService) {  }

  ngOnInit(): void {

  }

  addNote() {
    this.newNote.postedBy = localStorage.getItem('Username');
    this.newNote.postedAt = new Date();
    this.activity.notes.unshift(this.newNote);
    console.log(this.activity);
    this.activityService.editActivity(this.activity);
  }

  saveChanges() {
    console.log(this.activity);
    this.activityService.editActivity(this.activity);
    this.activeModal.close();
  }

  deleteActivity() {
    this.activityService.deleteActivity(this.activity);
    this.activeModal.close();
    window.location.reload();
  }
}
