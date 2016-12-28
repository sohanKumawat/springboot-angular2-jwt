import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/index';
import { LoginComponent } from './modules/login/index';
import { RegisterComponent } from './modules/register/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);