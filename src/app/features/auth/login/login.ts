import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import AuthService from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
  providers: [AuthService]
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private isAuthenticated: boolean = false;

  email: string = '';
  password: string = '';

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
