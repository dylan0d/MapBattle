import { Component, OnInit, Input } from '@angular/core';
import { MapCard } from '../map-card/map-card.component';
import { ProjectionModel } from '../ProjectionModel/ProjectionModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'projections',
  templateUrl: './projections.component.html',
  styleUrls: ['./projections.component.css']
})
export class Projections implements OnInit {

  @Input() models: ProjectionModel[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/polls/1/tally/').subscribe(
      res => this.tallyReceived(res),
      err => this.NoVotesReceived(err)
    );
  }

  tallyReceived(res) {
    res.forEach(tally => {
      this.models.forEach(model => {
        if (model.Name === tally.name){
          model.Votes = tally.votes;
          model.Id = tally.choice;
        }
      });
    });
  }

  updateVotes(votes) {
    this.tallyReceived(votes);
  }

  NoVotesReceived(err) {
    console.log(err);
  }
}
