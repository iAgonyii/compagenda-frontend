import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Login', () => {
    expect(component.loggedIn).toBe(false);
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement = hostElement.querySelector('#username');
    const passwordInput: HTMLInputElement = hostElement.querySelector('#password');
    const submit: HTMLInputElement = hostElement.querySelector('button');
    usernameInput.value = 'zz';
    usernameInput.dispatchEvent(new Event('#username'));
    fixture.detectChanges();
    passwordInput.value = 'zz';
    passwordInput.dispatchEvent(new Event('#password'));
    fixture.detectChanges();
    submit.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.loggedIn).toBe(true);
    });
  });
});
