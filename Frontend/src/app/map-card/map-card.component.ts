import { Component, OnInit, Input } from '@angular/core';
import { ProjectionModel } from '../ProjectionModel/ProjectionModel'

@Component({
  selector: 'MapCard',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCard implements OnInit {
  @Input() model: ProjectionModel;
  constructor() { }

  ngOnInit() {
  }

}
