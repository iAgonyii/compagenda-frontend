import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../models/activity';
import {ActivityService} from '../../services/activity.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivitiesComponent} from '../activities.component';
import {AuthGuard} from '../../services/authGuard';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];

  constructor(private activityService: ActivityService, private modalService: NgbModal, public authGuard: AuthGuard) { }

  ngOnInit(): void {
    if(this.authGuard.isLoggedIn()) {
      this.activityService.getActivities(+localStorage.getItem('UserId')).subscribe(res => {
        console.log(res);
        this.activities = res;
      });
    }
  }


  openModal(activity: Activity) {
    const modalRef = this.modalService.open(ActivitiesComponent);
    modalRef.componentInstance.activity = activity;
  }

}
