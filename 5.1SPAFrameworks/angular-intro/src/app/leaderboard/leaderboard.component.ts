import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../services/Team';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() teams: Array<Team>;
  constructor() { }

  ngOnInit(): void {
  }

}
