import { Component, OnInit, Input } from '@angular/core';
import { ProjectionModel } from '../ProjectionModel/ProjectionModel'

@Component({
  selector: 'projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class Projection implements OnInit {

  @Input() models: ProjectionModel[];

  constructor() { }

  ngOnInit() {
    console.log ("my name is", this.models)
  }

}
