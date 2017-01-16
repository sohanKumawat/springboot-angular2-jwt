import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../../../models/index';
import { ChartSeries } from '../index';
@Injectable()
export class AnalyticsService {

    constructor(private http: Http) { 
     }
    getAllAnalyticsData(viewId:String) {
      return this.http.get('/api/v1/analytics/dashboard?viewId='+viewId, this.jwt()).map((response: Response) => response.json());
    }
    getAnalyticsDataById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
    public highchartDesign(analyticsData:any) :any[]{
            let seriesList :any[]=[];
            analyticsData.payload.reports.forEach(function(report :any){
             let dataList :any[]=[];
               report.data.rows.forEach(function(row : any){
               row.metrics.forEach(function(metrics : any){
                   dataList.push(Number(metrics.values[0]));
               })
                 });
             let seriesObj=new ChartSeries(report.columnHeader.dimensions[0].split(":")[1],dataList);
                 seriesList.push(seriesObj);
              });
           return seriesList;
            }
       public highchartAxisCategory(analyticsData:any) :String[]{
             let categories :String[]=[];
               analyticsData.payload.reports.forEach(function(report :any){
               report.data.rows.forEach(function(row : any){
                 categories.push(row.dimensions[0]);
                 });
              });
           return categories;
            }
    
    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}