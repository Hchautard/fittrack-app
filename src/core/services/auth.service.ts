import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private isAuthenticated: boolean = false;
  private apiUrl: string = 'https://api.example.com/auth';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
