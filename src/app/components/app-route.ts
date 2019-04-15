import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../register/register/register.component';
import { TravelRequestComponent } from '../travel-request/travel-request/travel-request.component';

export const ROUTES: Routes =  [
    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'travel-request', component: TravelRequestComponent}
];
