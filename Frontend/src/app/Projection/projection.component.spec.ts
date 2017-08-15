/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Projection } from '../Projection/projection.component';

describe('Projection', () => {
  let component: Projection;
  let fixture: ComponentFixture<Projection>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projection ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
