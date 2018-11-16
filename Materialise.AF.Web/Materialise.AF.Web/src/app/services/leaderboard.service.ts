import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import { environment } from '../../environments/environment';
import { LeaderboardItem } from '../models/leaderboard-item';

@Injectable()
export class LeaderboardService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    private apiPath = `${environment.apiEndpoint}/user`;

    getTopUser(): Observable<LeaderboardItem[]> {
        const httpOptions = this.authService.getAuthorizationHeaders();
        return this.http.get<any>(this.apiPath, httpOptions).map(data => {
            const leaders =
                data.map((user, i) => {
                    return {
                        no: i + 1,
                        userName: user.userName,
                        progress: this.formatProgress(user.progress),
                        itemsFound: user.markers.length,
                        coins: user.coins
                    };
                });
            return leaders;
        });
    }

    private formatProgress(progress: string): string {
        const index = progress.lastIndexOf('.');
        if (index === -1) {
            return progress;
        }

        return progress.slice(0, index);
    }

}
