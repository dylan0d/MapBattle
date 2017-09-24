import { Component, OnInit } from '@angular/core';
import { Projections } from '../Projections/projections.component';
import { ProjectionModel } from '../../Models/ProjectionModel/ProjectionModel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
