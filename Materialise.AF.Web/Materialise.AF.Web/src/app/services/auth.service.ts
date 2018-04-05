import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/users/authenticate';

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  isAuth() : boolean {
    let token = localStorage.getItem('token');    
    if (token) {
      return true;
    }

    return false;
  }
}
