import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Projection } from './Projection/projection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { MapCard } from './map-card/map-card.component';


@NgModule({
  declarations: [
    AppComponent,
    Projection,
    DashboardComponent,
    MapCard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdIconModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  exports: [
   Projection,
   DashboardComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
