import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team.service';
import { Team } from './services/Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-intro';
  hrsMinSec = {hours: 0, minutes: 2, seconds: 10};
  loading = true;
  teams: Array<Team> = [];
  
  constructor(private teamService: TeamService) { }
  
  ngOnInit(): void {
    setTimeout(() => { this.loading = false; }, 5000)

    this.teamService.getAllTeams().subscribe( data => {
      console.log(data.message);
      this.teams = data.message;
    });
  }

}
