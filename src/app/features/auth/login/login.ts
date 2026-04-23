import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import AuthService from '../../../../core/services/auth.service';

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

  email: string = '';
  password: string = '';

  onSubmit() {
    const success = this.authService.login(this.email, this.password);
    if (success) {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
}
