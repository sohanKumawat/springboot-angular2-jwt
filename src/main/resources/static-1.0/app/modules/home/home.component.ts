import { Component, OnInit } from '@angular/core';

import { User } from '../../models/index';
import { UserService , AnalyticsService } from '../../services/index';

@Component({
    styleUrls :  ['app/css/dashboard.css'],
    templateUrl: 'app/modules/home/home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService,private analyticService: AnalyticsService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.options = {
           chart: { type: 'column' },
            title : { text : 'angular2-highcharts example' },
            series: [{
                name: 's1',
                data: [2,3,5,8,13],
                allowPointSelect: true
            },{
                name: 's2',
                data: [-2,-3,-5,-8,-13],
                allowPointSelect: true
            }]
        };
    }
    options: Object;
    chart: Object;
        
    ngOnInit() {
        this.loadAnalyticsData();
    }
    private loadAnalyticsData() {
        this.analyticService.getAllAnalyticsData().subscribe(users => { this.users = users; });
    }
}