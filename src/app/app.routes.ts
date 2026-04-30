import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login'
import { Signup } from './features/signup/signup';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'signup', component: Signup },
  { path: '**',pathMatch: 'full', component: NotFound }
];
