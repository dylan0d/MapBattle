/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapCard } from './map-card.component';

describe('MapCard', () => {
  let component: MapCard;
  let fixture: ComponentFixture<MapCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
