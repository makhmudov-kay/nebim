/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormToSendComponent } from './form-to-send.component';

describe('FormToSendComponent', () => {
  let component: FormToSendComponent;
  let fixture: ComponentFixture<FormToSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormToSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
