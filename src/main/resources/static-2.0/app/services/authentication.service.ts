import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {///api/authenticate
     var  headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('X-Requested-With','XMLHttpRequest')
        return this.http.post('/api/auth/login', JSON.stringify({ username: username, password: password }),{headers:headers})
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}