import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService,AnalyticsService ,CommonUtilService} from './services/index';
import { HomeComponent } from './modules/home/index';
import { LoginComponent } from './modules/login/index';
import { RegisterComponent } from './modules/register/index';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ChartModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        AnalyticsService,
        CommonUtilService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }