import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }

    isAuth(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }

        return false;
    }
    getAuthorizationHeaders(): Object {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const authHeaders = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const httpOptions = {
            headers: authHeaders
        };
        
        return httpOptions;
    }
}
