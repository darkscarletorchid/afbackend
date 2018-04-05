import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { LeaderboardItem } from '../models/leaderboard-item';


@Injectable()
export class LeaderboardService {

  constructor(private http: HttpClient, ) { }

  private apiPath: string = environment.apiEndpoint + '/user';

  getTopUser(): Observable<LeaderboardItem[]> {
    return this.http.get<any>(this.apiPath).map(data => {
      var leaders =
        data.map((user, i) => {
          return {
            no: i + 1,
            userName: user.userName,
            progress: user.progress,
            itemsFound: user.markers.length
          }
        });
      return leaders;
    });
  };

}
