import { Component } from '@angular/core';
import { VoteService } from './Services/vote.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VoteService]
})
export class AppComponent {
  title = 'app works!';
}
