import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectionModel } from '../ProjectionModel/ProjectionModel';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'MapCard',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCard implements OnInit {
  @Input() model: ProjectionModel;
  @Output() updateVotes: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  vote() {
    const formHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = 'choice=' + this.model.Id;
    this.http.post('http://127.0.0.1:8000/polls/1/vote/',
                    body, {headers: formHeaders}).subscribe(
      res => this.successfulVote(res),
      err => this.unsuccessfulVote(err)
    );
  }

  successfulVote(res) {
    res.forEach(element => {
      if (element.name === this.model.Name) {
        this.model.Votes = element.votes;
      }
    });
    this.updateVotes.emit(res);
  }

  unsuccessfulVote(err) {
    console.log('Error: ', err);
  }

}
