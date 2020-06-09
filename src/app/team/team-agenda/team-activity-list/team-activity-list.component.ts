import {Component, OnInit} from '@angular/core';
import {Activity} from '../../../models/activity';
import {ActivityService} from '../../../services/activity.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from '../../../services/authGuard';
import {ActivitiesComponent} from '../../../activities/activities.component';
import {Note} from '../../../models/note';

@Component({
  selector: 'app-team-activity-list',
  templateUrl: './team-activity-list.component.html',
  styleUrls: ['./team-activity-list.component.css']
})
export class TeamActivityListComponent implements OnInit {

  activities: Activity[];

  constructor(private activityService: ActivityService, private modalService: NgbModal, public authGuard: AuthGuard) {
  }

  ngOnInit(): void {
    this.activityService.getTeamActivities(+localStorage.getItem('TeamId')).subscribe(res => {
      console.log(res);
      let teamNotes: any[] = [];
      res.forEach(activity => {
        teamNotes.push(activity.notes);
      });
      console.log(teamNotes);
      if (teamNotes.length > 0) {
        this.activityService.teamNotes = teamNotes[0].reverse();
      }
      this.activities = res;
    });
  }


  openModal(activity: Activity) {
    const modalRef = this.modalService.open(ActivitiesComponent);
    modalRef.componentInstance.activity = activity;
  }

}
