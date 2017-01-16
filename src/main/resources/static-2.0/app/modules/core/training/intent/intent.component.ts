import { Component, OnInit,HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { User } from '../../../../models/index';
//import { slideInDownAnimation } from '../../../../utils/index';

@Component({
   // styleUrls :  ['app/css/innerBase.css'],
    templateUrl: 'app/modules/core/training/intent/intent.component.html',
   // animations:[slideInDownAnimation]
})

export class IntentComponent implements OnInit {
 selectedId:string;
//@HostBinding('@routeAnimation') routeAnimation = true;
//@HostBinding('style.display')   display = 'block';
//@HostBinding('style.position')  position = 'absolute';
    constructor( ) {
    }
        
    ngOnInit() {
    }
//    onSelect(id:string) {
//        this.selectedId =id;
//        // Navigate with relative link, Ex -- current route is x then its route will be x/id,
//        this.router.navigate([id], { relativeTo: this.route });
//      }
}