import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ProjectionModel } from '../../Models/ProjectionModel/ProjectionModel';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { VoteService } from '../../Services/vote.service';
@Component({
  selector: 'map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCard implements OnInit {
  @Input() model: ProjectionModel;
  @Input() totalVotes: number;  
  @Output() updateVotes: EventEmitter<any> = new EventEmitter();
  percentage: number = 0;
  percentageString = '0';

  constructor(private http: HttpClient, private voteService: VoteService) {
   }

  ngOnInit() {
    console.log(this.model.Name, this.model.Votes, this.totalVotes);
  }

  ngOnChanges(args: any[]){
    this.percentage = Math.round((this.model.Votes/this.totalVotes)*100);   
    this.percentageString = this.percentage.toString()
  }

  vote() {
    let res = this.voteService.vote(this.model.Id).subscribe( 
      res => this.successfulVote(res),
      err => this.unsuccessfulVote(err)
    )
  }

  successfulVote(res) {
    console.log(res)
    res.forEach(element => {
      if (element.name === this.model.Name) {
        this.model.Votes = element.votes;
      }
    });
    this.updateVotes.emit(res);
  }

  unsuccessfulVote(err) {
  }
}
