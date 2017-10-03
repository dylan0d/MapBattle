import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { ProjectionModel } from '../../Models/ProjectionModel/ProjectionModel';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { VoteService } from '../../Services/vote.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MapInfoComponent } from '../map-info/map-info.component';
@Component({
  selector: 'map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCard implements OnInit, OnChanges {
  @Input() model: ProjectionModel;
  @Input() totalVotes: number;
  @Output() updateVotes: EventEmitter<any> = new EventEmitter();
  percentage = 0;
  percentageString = '0';

  constructor(private http: HttpClient, private voteService: VoteService, public dialog: MdDialog) {
   }

  ngOnInit() {
    console.log(this.model.Name, this.model.Votes, this.totalVotes);
  }

  ngOnChanges (changes: SimpleChanges) {
    this.percentage = Math.round((this.model.Votes / this.totalVotes) * 100);
    this.percentageString = this.percentage.toString();
  }

  vote() {
      const res = this.voteService.vote(this.model.Id).subscribe(
      res => this.successfulVote(res),
      err => this.unsuccessfulVote(err)
    );
  }

  successfulVote(maps) {
    console.log(maps);
    maps.forEach(element => {
      if (element.name === this.model.Name) {
        this.model.Votes = element.votes;
      }
    });
    this.updateVotes.emit(maps);
  }

  showInfo() {
      const dialogRef = this.dialog.open(MapInfoComponent, {
      data: { projection: this.model }
    });
  };

  unsuccessfulVote(err) {
  }
}
