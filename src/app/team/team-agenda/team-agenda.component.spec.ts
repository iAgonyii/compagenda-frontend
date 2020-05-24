import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAgendaComponent } from './team-agenda.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TeamActivityListComponent} from './team-activity-list/team-activity-list.component';

describe('TeamAgendaComponent', () => {
  let component: TeamAgendaComponent;
  let fixture: ComponentFixture<TeamAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAgendaComponent, TeamActivityListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
