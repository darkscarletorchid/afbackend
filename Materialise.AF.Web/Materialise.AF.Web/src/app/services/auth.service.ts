import { Injectable } from '@angular/core';

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
}
