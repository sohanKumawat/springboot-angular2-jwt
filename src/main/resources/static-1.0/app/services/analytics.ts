import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/index';

@Injectable()
export class AnalyticsService {
    constructor(private http: Http) { 
     }
    getAllAnalyticsData() {
        return this.http.get('/api/v1/analytics/dashboard', this.jwt()).map((response: Response) => response.json());
    }
    getAnalyticsDataById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
 
    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}