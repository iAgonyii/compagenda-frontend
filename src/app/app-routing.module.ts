import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {ActivityAddComponent} from './activities/activity-add/activity-add.component';
import {ActivityListComponent} from './activities/activity-list/activity-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/authGuard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeamAgendaComponent} from './team/team-agenda/team-agenda.component';
import {TeamGuard} from './services/teamGuard';
import {TeamComponent} from './team/team.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard] },
  { path: 'team/agenda', component: TeamAgendaComponent, canActivate: [AuthGuard, TeamGuard] },
  { path: 'team', component: TeamComponent, canActivate: [AuthGuard, TeamGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
