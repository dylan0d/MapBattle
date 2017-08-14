import { Component, OnInit } from '@angular/core';
import { Projection } from '../Projection/projection.component';
import { ProjectionModel } from '../ProjectionModel/ProjectionModel'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Models: ProjectionModel[] = [];
  Mercator: ProjectionModel = new ProjectionModel;
  Robinson: ProjectionModel = new ProjectionModel;
  Dymaxion: ProjectionModel = new ProjectionModel;
  WinkelTripel: ProjectionModel = new ProjectionModel;
  WatermanButterfly: ProjectionModel = new ProjectionModel;
  GallPeters: ProjectionModel = new ProjectionModel;

  constructor() { }

  ngOnInit() {
    this.Mercator.name = "Mercator";
    this.Mercator.image = "dadas";
    this.Mercator.description = "good for sailing";
    this.Mercator.personality = "your to stupid";

    this.Models.push(this.Mercator);

    this.Robinson.name = "Robinson";
    this.Robinson.image = "dadas";
    this.Robinson.description = "Looks the Best";
    this.Robinson.personality = "Running Shoes";

    this.Models.push(this.Robinson);

    this.Dymaxion.name = "Dymaxion";
    this.Dymaxion.image = "dadas";
    this.Dymaxion.description = "No Distortion";
    this.Dymaxion.personality = "Toed Shoes";

    this.Models.push(this.Dymaxion);

    this.WinkelTripel.name = "Winkel-Tripel";
    this.WinkelTripel.image = "dadas";
    this.WinkelTripel.description = "No Distortion";
    this.WinkelTripel.personality = "Toed Shoes";

    this.Models.push(this.WinkelTripel);

    this.WatermanButterfly.name = "Waterman Butterfly";
    this.WatermanButterfly.image = "dadas";
    this.WatermanButterfly.description = "Funny Looking";
    this.WatermanButterfly.personality = "1909 Cahill";

    this.Models.push(this.WatermanButterfly);

    this.GallPeters.name = "Gall-Peters";
    this.GallPeters.image = "dadas";
    this.GallPeters.description = "Shit";
    this.GallPeters.personality = "I hate you";

    this.Models.push(this.GallPeters);
  }
}
