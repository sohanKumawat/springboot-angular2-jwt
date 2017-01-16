import { NgModule,SkipSelf,Optional } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {HomeComponent,DashboardComponent,IntentComponent } from './index';
import { AuthGuard } from '../../guards/index';


const homeRoutes: Routes = [
                               { path: 'home', component: HomeComponent, canActivate: [AuthGuard] ,
                                children: [
                                 { path: 'dashboard', component: DashboardComponent },
                                 { path: 'intent', component: IntentComponent },
                                 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                                  ]
                                }
];

@NgModule({
    imports: [
      RouterModule.forChild(homeRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ComponentRoutingModule { 
    /* This is Preventing  reimport of the CustomComponentModules */
    constructor (@Optional() @SkipSelf() componentRoutingModule: ComponentRoutingModule) {
        if (componentRoutingModule) {
          throw new Error(
            'ComponentRoutingModule is already loaded. Import it in the AppModule only');
        }
      }
}
