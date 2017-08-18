import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Projections } from './Components/projections/projections.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { MapCard } from './Components/map-card/map-card.component';


@NgModule({
  declarations: [
    AppComponent,
    Projections,
    DashboardComponent,
    MapCard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    MdIconModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  exports: [
   Projections,
   DashboardComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
