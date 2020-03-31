import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {ActivityAddComponent} from './activities/activity-add/activity-add.component';
import {ActivityListComponent} from './activities/activity-list/activity-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: AgendaComponent, children: [
      { path: 'list', component: ActivityListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
