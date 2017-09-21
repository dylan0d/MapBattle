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

  models: ProjectionModel[];
  totalVotes = 0;

  constructor(private http: HttpClient, private voteService: VoteService) { }

  ngOnInit() {
    this.models = [];
    this.voteService.getVotes().subscribe(
      res => this.tallyReceived(res),
      err => this.NoVotesReceived(err)
    );
  }

  tallyReceived(res) {
    console.log(res);
    this.totalVotes = 0;
    res.forEach(model => {
      console.log(model);
      const temp = new ProjectionModel;
      temp.Name = model.name;
      temp.Description = model.description;
      temp.Personality = model.personality;
      temp.Id = model.id;
      temp.Votes = model.votes;
      temp.Credit = model.credit;
      temp.CreditURL = model.creditURL;
      temp.Image = model.image_path;
      this.totalVotes += model.votes;
      this.models.push(temp);
    });
  }

  updateVotes(votes) {
    this.totalVotes = 0;
    votes.forEach(projection => {
      this.models.forEach(model => {
        if (model.Id === projection.id) {
          model.Votes = projection.votes;
        }
      });
      this.totalVotes += projection.votes;
    });
  }

  NoVotesReceived(err) {
    console.log(err);
  }
}
