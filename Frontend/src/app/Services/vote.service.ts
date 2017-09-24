import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class VoteService {
    url = 'http://127.0.0.1:8000/polls/1/';

    constructor(private http: HttpClient) { }

    getVotes(): Observable<Object> {
        return this.http.get('http://127.0.0.1:8000/polls/1/tally/');
    }

    vote(id): Observable<Object> {
        const formHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        const body = 'choice=' + id;
        return this.http.post(this.url + 'vote/',
                        body, {headers: formHeaders});
    }

    handleResponse(res) {
        if (res.status === 200) {
            return res;
        } else {
            console.log(res);
            return ('Error: Votes not retrieved!');
        }
    }
}
