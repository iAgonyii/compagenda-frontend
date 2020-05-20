import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamActivityListComponent } from './team-activity-list.component';

describe('TeamActivityListComponent', () => {
  let component: TeamActivityListComponent;
  let fixture: ComponentFixture<TeamActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
