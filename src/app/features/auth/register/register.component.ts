import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  samePassword: boolean = false;

  model = signal<RegisterRequest>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  onSubmit(form: NgForm): void {
    console.log('Form submitted', form.value);
    if(form.value.password !== form.value.confirmPassword) {
      this.samePassword = false;
      console.error('Passwords do not match');
      return;
    }
    else{
      this.samePassword = true;
      console.log('Passwords match');
    }
    if(form.invalid) {
      console.error('Form is invalid', form.errors);
      return;
    }
    console.log('Form is valid', form.value);
    this.authService.registerUser(this.model()).subscribe({
      next: () => {
        console.log('User registered successfully');
        //invia una mail di conferma all'utente
        alert('Registration successful! Please check your email for confirmation.');
        //reindirizza alla pagina di login
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