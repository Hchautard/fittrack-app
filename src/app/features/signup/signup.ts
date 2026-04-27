import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import AuthService from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  standalone: true,
  providers: [AuthService]
})
export class Signup {
  private authService = inject(AuthService);

  email: string = '';
  password: string = '';
  name: string = '';

  onSubmit() {
    const success = this.authService.signup(this.email, this.password, this.name);
    if (success) {
      alert('Signup successful!');
    } else {
      alert('Signup failed. Please check your input.');
    }

  }
}
