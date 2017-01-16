import { Component, OnInit ,ElementRef} from '@angular/core';
import { User } from '../../../../models/index';
import {AnalyticsService }                                 from   '../services/analytic.service';

declare var $: any;

@Component({
    styleUrls :['app/css/dashboard.css'],
    templateUrl: 'app/modules/core/analytics/dashboard/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    response : JSON;
    chartList: any[]=[];
    chart: Object;
    btnId : string='button name';
    constructor(private analyticService: AnalyticsService) {
  //  constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadAnalyticsData(); 
        }
 
    public loadAnalyticsData() {
      let viewIdLidt : string []=['VIEWID1','VIEWID2','VIEWID3'];
        let viewTypeLidt : string []=['column','pie','area','line'];
      viewIdLidt.forEach(viewid=>{
      this.analyticService.getAllAnalyticsData(viewid).subscribe(response => {
         this.response = response; 
         let seObj=this.analyticService.highchartDesign(this.response);
        
        var viewType='area';
        if(viewid==="VIEWID1") viewType="column";
        if(viewid==="VIEWID2") viewType="column";
        if(viewid==="VIEWID3") viewType="area";
        if(viewid==="VIEWID4") viewType="area";
        
           this.chartList.push({
             chart: { type: viewType },
             xAxis : {
               categories : this.analyticService.highchartAxisCategory(this.response)
              },
            title : { text : viewid },
            series: seObj
           });
      });
      }) 
    }
  
   public updateSelectedDateValue(value:string):void {
       alert("Date Values ** "+value);
   }
    
 
}