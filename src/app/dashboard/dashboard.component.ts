import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TeamService} from '../services/team.service';
import {ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hasTeam: boolean;


  constructor(private teamService: TeamService, public activityService: ActivityService) {
    if (+localStorage.getItem('TeamId') > 0) {
      this.hasTeam = true;
    }

    this.teamService.teamIdSet.subscribe(res => {
      console.log(res);
      this.hasTeam = res;
    });
  }

  ngOnInit(): void {
  }

}
