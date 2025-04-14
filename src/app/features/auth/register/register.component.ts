import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterRequest } from '../models/register-request.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule]
})
export class RegisterComponent {
  private router = inject(Router);

  model = signal<RegisterRequest>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  onSubmit(): void {
    // Implement your registration logic here
    console.log('Form submitted', this.model());
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}