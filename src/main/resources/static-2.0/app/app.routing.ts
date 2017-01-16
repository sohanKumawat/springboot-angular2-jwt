import { NgModule,Optional ,SkipSelf} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent,RegisterComponent,AdminDashboardComponent } from './modules/index';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'adminDashboard', component: AdminDashboardComponent },
    { path: '', redirectTo: 'home' ,pathMatch: 'full'},
   // { path: '**', component: RouteComponentNotFound }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],//RouterModule.forRoot(routes, { useHash: true })  
    exports: [RouterModule]
  })
  
 export class AppRoutingModule {
    /* This is Preventing  reimport of the CustomComponentModules */
//    constructor (@Optional() @SkipSelf() appRoutingModule: AppRoutingModule) {
//        if (appRoutingModule) {
//          throw new Error(
//            'AppRoutingModule is already loaded. Import it in the AppModule only');
//        }
//      }
}
