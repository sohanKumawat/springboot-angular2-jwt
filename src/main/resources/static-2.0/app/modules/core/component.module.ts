import { NgModule,Optional,SkipSelf }            from '@angular/core';
import {SharedModule }                           from   '../common/index';
import {HomeComponent,DashboardComponent,IntentComponent } from   './index';
import {ComponentRoutingModule }                           from   './component.routing';
import {AnalyticsService }                                 from   './index';
import { ChartModule }                                     from 'angular2-highcharts';
@NgModule({
  imports      :  [SharedModule,ChartModule,ComponentRoutingModule], //This imports available to declaration components
  declarations :  [HomeComponent,DashboardComponent,IntentComponent ],
  providers    :  [ AnalyticsService ]
})
export class CustomComponentModules { 
}