import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class User {
  id: number;
  email: string;
  name: string;

  constructor(id: number, email: string, name: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private http = inject(HttpClient);
  private isAuthenticated: boolean = false;
  private apiDevUrl: string = 'http://localhost:8080';
  private createRoute : string = '/api/users/create';
  private loginRoute : string = '/auth/login';
  constructor(){
  }

  signup(email: string, password: string, name: string) : boolean {
    if (email && password && name) {
      const url = this.apiDevUrl + this.createRoute;
      const body = { email, password, name };

      this.http.post<User>(url, body).subscribe({
        next: (user) => {
          console.log('Created user', user);
          this.isAuthenticated = true;
          return true;
        },
        error: (err) => {
          console.error('Erreur création user', err);
          return false;
        }
      });
    }
    return false;
  }

  // @ts-ignore
  login(email: string, password: string): Observable<any> {
    const url = this.apiDevUrl + this.loginRoute;
    const body = { email, password };
    return this.http.post<User>(url, body);
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
