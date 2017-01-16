import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
     styleUrls :[],
     providers:[],
     templateUrl:'app/modules/core/admin/adminDashboard.component.html',
  //styles :''
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor() {}

  ngOnInit() {
    // Capture the session ID if available
//    this.sessionId = this.route
//      .queryParams
//      .map(params => params['session_id'] || 'None');
//
//    // Capture the fragment if available
//    this.token = this.route
//      .fragment
//      .map(fragment => fragment || 'None');
      
//    let id = +this.route.snapshot.params['id'];
//
//    this.service.getHero(id)
//      .then((hero: Hero) => this.hero = hero);
  }
/*
 let navigationExtras: NavigationExtras = {
  preserveQueryParams: true,
  preserveFragment: true
};

// Redirect the user
this.router.navigate([redirect], navigationExtras);
 */
}
