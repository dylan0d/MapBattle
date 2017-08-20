import { Component, OnInit, Input } from '@angular/core';
import { MapCard } from '../map-card/map-card.component';
import { ProjectionModel } from '../../Models/ProjectionModel/ProjectionModel';
import { VoteService } from '../../Services/vote.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'projections',
  templateUrl: './projections.component.html',
  styleUrls: ['./projections.component.css']
})
export class Projections implements OnInit {

  @Input() models: ProjectionModel[];
  totalVotes: number = 0;

  constructor(private http: HttpClient, private voteService: VoteService) { }

  ngOnInit() {
    this.voteService.getVotes().subscribe(
      res => this.tallyReceived(res),
      err => this.NoVotesReceived(err)
    );
  }

  tallyReceived(res) {
    this.totalVotes = 0;
    res.forEach(tally => {
      this.models.forEach(model => {
        if (model.Name === tally.name){
          model.Votes = tally.votes;
          model.Id = tally.choice;
        }
      });
      this.totalVotes += tally.votes;
    });
  }

  updateVotes(votes) {
    this.tallyReceived(votes);
  }

  NoVotesReceived(err) {
    console.log(err);
  }
}
