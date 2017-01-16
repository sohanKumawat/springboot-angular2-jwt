import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { SettingService }         from '../services/index';
import 'rxjs/add/operator/map';

@Component({
     styleUrls :[],
     providers:[SettingService],
     templateUrl:'app/modules/core/admin/userSettings/userSetting.component.html',
     //styles :''
})
export class UserSettingComponent implements OnInit {
    
    constructor(private settingService : SettingService) {
    
    }
    ngOnInit(){
        
    }
}