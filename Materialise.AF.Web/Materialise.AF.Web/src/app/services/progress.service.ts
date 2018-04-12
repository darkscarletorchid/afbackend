import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserItem, ItemProgress } from '../models/item';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';


@Injectable()
export class ProgressService {

    baseUrl: string;

    constructor(private httpClient: HttpClient, private authService: AuthService) {
    }

    public getProgressByUser(id: number): Observable<ItemProgress> {
        const httpOptions = this.authService.getAuthorizationHeaders();
        return this.httpClient.get<ItemProgress>(`${environment.apiEndpoint}/user/${id}`, httpOptions).map(data => {
            return data;
        });
    }

    public addToProgress(userItem: UserItem): Observable<UserItem> {
        const httpOptions = this.authService.getAuthorizationHeaders();
        return this.httpClient.post<UserItem>(`${environment.apiEndpoint}/markers`, userItem, httpOptions);
    }
}
