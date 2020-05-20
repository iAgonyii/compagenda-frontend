import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamActivityAddComponent } from './team-activity-add.component';

describe('TeamActivityAddComponent', () => {
  let component: TeamActivityAddComponent;
  let fixture: ComponentFixture<TeamActivityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamActivityAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamActivityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
