import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TimerObservable } from "rxjs/observable/TimerObservable";

// import {MatTableDataSource, MatSort} from '@angular/material';
import { LeaderboardItem } from '../../models/leaderboard-item'
import { LeaderboardService } from '../../services/leaderboard.service'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  
  leaders: LeaderboardItem[] = [];
  interval = 60000 * 5; //5 min
  displayedColumns = ['no', 'userName', 'itemsFound', 'progress'];
  lastUpdated: Date;
  
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {    
    this.lastUpdated = new Date();

    TimerObservable.create(0, this.interval).subscribe(() => {
      this.leaderboardService.getTopUser().subscribe(
        data => {
          console.log(data);
          this.leaders = data;
        },
        error => {
          console.log("error occured");
        })

        this.lastUpdated = new Date(Date.now());
      });

  }

  private getLeaderboard(): LeaderboardItem[] {
    return new Array<LeaderboardItem>();
  }

}
