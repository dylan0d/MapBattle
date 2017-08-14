import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Projection } from './Projection/projection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Projection,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
