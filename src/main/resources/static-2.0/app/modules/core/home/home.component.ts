import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/index';
import { UserService } from '../../../services/index';

@Component({
   // styleUrls :  ['app/css/innerBase.css'],
    templateUrl: 'app/modules/core/home/home.component.html',
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
       // this.loadAnalyticsData();
    }
    private loadAnalyticsData() {
        //this.analyticService.getAllAnalyticsData().subscribe(users => { this.users = users; });
    }
}
