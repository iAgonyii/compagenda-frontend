import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamActivityAddComponent } from './team-activity-add.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

describe('TeamActivityAddComponent', () => {
  let component: TeamActivityAddComponent;
  let fixture: ComponentFixture<TeamActivityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamActivityAddComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [ NgbActiveModal ]
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
