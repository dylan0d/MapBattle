/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Projections } from '../projections/projections.component';

describe('Projection', () => {
  let component: Projections;
  let fixture: ComponentFixture<Projections>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projections ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
