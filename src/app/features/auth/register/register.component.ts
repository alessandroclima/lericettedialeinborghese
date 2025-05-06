import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterRequest } from '../models/register-request.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule]
})
export class RegisterComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  model = signal<RegisterRequest>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  onSubmit(form: any): void {
    if(form.invalid) {
      console.error('Form is invalid', form.errors);
      return;
    }
    this.authService.registerUser(this.model()).subscribe({
      next: () => {
        console.log('User registered successfully');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error registering user', error);
      }
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}