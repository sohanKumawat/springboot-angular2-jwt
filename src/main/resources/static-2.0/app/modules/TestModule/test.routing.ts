import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '',
    styles: [  ],
    animations: [  ],
    
  })
export class TestRouting {
   
    constructor( private route: ActivatedRoute, private router: Router) {
	
    }
    
    testRouting():void{
      //  this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
        //Notice that the path goes up a level (../) syntax. If the current crisis id is 1,
        //the resulting path back to the crisis list is /x/;id=3;foo=foo.
    }
    
    
    
}