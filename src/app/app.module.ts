import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityAddComponent } from './activities/activity-add/activity-add.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ActivitiesComponent } from './activities/activities.component';
import {FormsModule} from '@angular/forms';
import {ActivityService} from './services/activity.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './services/authGuard';

@NgModule({
  declarations: [
    AppComponent,
    ActivityAddComponent,
    ActivityListComponent,
    AgendaComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ActivityService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
