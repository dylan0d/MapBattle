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
    this.Mercator.Name = "Mercator";
    this.Mercator.Image = "assets/img/projections/Mercator.jpg";
    this.Mercator.Description = "good for sailing";
    this.Mercator.Personality = "your to stupid";
    this.Mercator.Credit = "By Strebe - Own work, CC BY-SA 3.0";
    this.Mercator.CreditURL = "https://commons.wikimedia.org/w/index.php?curid=16115307";

    this.Models.push(this.Mercator);

    this.Robinson.Name = "Robinson";
    this.Robinson.Image = "assets/img/projections/Robinson.jpg";
    this.Robinson.Description = "Looks the Best";
    this.Robinson.Personality = "Running Shoes";
    this.Robinson.Credit = "By Strebe - Own work, CC BY-SA 3.0";
    this.Robinson.CreditURL = "https://commons.wikimedia.org/w/index.php?curid=16115337";

    this.Models.push(this.Robinson);

    this.Dymaxion.Name = "Dymaxion";
    this.Dymaxion.Image = "assets/img/projections/Dymaxion.svg";
    this.Dymaxion.Description = "No Distortion";
    this.Dymaxion.Personality = "Toed Shoes";
    this.Dymaxion.Credit = "By Eric Gaba, Wikimedia Commons user Sting, CC BY-SA 2.5";
    this.Dymaxion.CreditURL = "https://commons.wikimedia.org/w/index.php?curid=11881327";

    this.Models.push(this.Dymaxion);

    this.WinkelTripel.Name = "Winkel-Tripel";
    this.WinkelTripel.Image = "assets/img/projections/Winkel-Tripel.jpg";
    this.WinkelTripel.Description = "Less Distortion";
    this.WinkelTripel.Personality = "Hates Toed Shoes";
    this.WinkelTripel.Credit = "By Strebe - Own work, CC BY-SA 3.0";
    this.WatermanButterfly.CreditURL = "https://commons.wikimedia.org/w/index.php?curid=16115375";

    this.Models.push(this.WinkelTripel);

    this.WatermanButterfly.Name = "Waterman Butterfly";
    this.WatermanButterfly.Image = "assets/img/projections/Waterman-Butterfly.jpg";
    this.WatermanButterfly.Description = "Funny Looking";
    this.WatermanButterfly.Personality = "1909 Cahill";
    this.WatermanButterfly.Credit = "By Steve waterman - Own work, CC BY-SA 3.0";
    this.WatermanButterfly.CreditURL =  "https://commons.wikimedia.org/w/index.php?curid=30652627";
    

    this.Models.push(this.WatermanButterfly);

    this.GallPeters.Name = "Gall-Peters";
    this.GallPeters.Image = "assets/img/projections/Gall–Peters.jpg";
    this.GallPeters.Description = "Shit";
    this.GallPeters.Personality = "I hate you";
    this.GallPeters.Credit = "By Strebe - Own work, CC BY-SA 3.0";
    this.GallPeters.CreditURL =  "https://commons.wikimedia.org/w/index.php?curid=16115242";

    this.Models.push(this.GallPeters);
  }
}
