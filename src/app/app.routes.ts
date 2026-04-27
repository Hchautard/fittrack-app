import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login'
import { Signup } from './features/signup/signup';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'signup', component: Signup },
];
