import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityAddComponent } from './activities/activity-add/activity-add.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ActivitiesComponent } from './activities/activities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivityService} from './services/activity.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './services/authGuard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
import { TeamAgendaComponent } from './team/team-agenda/team-agenda.component';
import { TeamActivityListComponent } from './team/team-agenda/team-activity-list/team-activity-list.component';
import { TeamActivityAddComponent } from './team/team-agenda/team-activity-add/team-activity-add.component';
import { TeamComponent } from './team/team.component';
import { TeamInvitesComponent } from './team/team-invites/team-invites.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityAddComponent,
    ActivityListComponent,
    AgendaComponent,
    ActivitiesComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    TeamCreateComponent,
    TeamAgendaComponent,
    TeamActivityListComponent,
    TeamActivityAddComponent,
    TeamComponent,
    TeamInvitesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [
    ActivityService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
