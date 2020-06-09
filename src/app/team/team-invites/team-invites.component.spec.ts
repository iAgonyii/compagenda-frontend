import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInvitesComponent } from './team-invites.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('TeamInvitesComponent', () => {
  let component: TeamInvitesComponent;
  let fixture: ComponentFixture<TeamInvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInvitesComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
