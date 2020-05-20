import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAgendaComponent } from './team-agenda.component';

describe('TeamAgendaComponent', () => {
  let component: TeamAgendaComponent;
  let fixture: ComponentFixture<TeamAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAgendaComponent ]
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
