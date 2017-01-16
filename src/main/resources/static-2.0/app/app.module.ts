import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule ,UrlHandlingStrategy } from '@angular/router';
import { AppComponent }  from './app.component';
import { AppRoutingModule }        from './app.routing';
import { AlertComponent,HighlightDirective1 } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService ,UtilityService} from './services/index';
import { SharedModule  } from './modules/common/index';
import { CustomComponentModules, LoginComponent,RegisterComponent,AdminDashboardComponent } from './modules/index';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SharedModule,
        CustomComponentModules
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        AdminDashboardComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        UtilityService,
        Location, {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    exports:[],
    
   bootstrap: [AppComponent]
})

export class AppModule { }