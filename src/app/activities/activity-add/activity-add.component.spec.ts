import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAddComponent } from './activity-add.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';

describe('ActivityAddComponent', () => {
  let component: ActivityAddComponent;
  let fixture: ComponentFixture<ActivityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityAddComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
