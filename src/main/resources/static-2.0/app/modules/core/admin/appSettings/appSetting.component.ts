import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { SettingService }         from '../services/index';
import 'rxjs/add/operator/map';

@Component({
     styleUrls :[],
     providers:[],
     templateUrl:'app/modules/core/admin/appSettings/appSetting.component.html',
     //styles :''
})
export class AppSettingComponent implements OnInit {
    
    constructor(private settingService : SettingService) {
    }
    ngOnInit(){
        
    }
}