import { Routes } from '@angular/router';
import { LoginComponent } from '@features/auth/login/login'
import { Signup } from '@features/signup/signup';
import { NotFound } from '@features/not-found/not-found';
import { Dashboard } from '@features/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
  { path: '**', pathMatch: 'full', component: NotFound },
];
