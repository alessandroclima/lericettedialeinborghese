import { Component, inject, Inject, signal, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Divider, DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginRequest } from '../models/login-request.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';
import { ForgotPassword } from '../models/forgot-password.model';

@Component({
  selector: 'app-login',
  imports: [DividerModule, ButtonModule, InputTextModule, CardModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  OnRegister() {
    this.router.navigate(['/register']);
  }

  private authService = inject(AuthService);
  private router = inject(Router)
  private cookieService = inject(CookieService)

  OnForgotPassword(form: NgForm) {
    //se la mail è vuota o nulla mostra messaggio di errore sul form
    if (form.value.emailforreset == null || form.value.emailforreset == '') {
      form.controls['emailforreset'].setErrors({ 'required': true });
      console.error('Email is required');
      return;
    }
    //se la mail non è valida mostra messaggio di errore sul form
    if (!form.controls['emailforreset'].valid) {
      console.error('Email is not valid');
      return;
    }
    //se la mail è valida mostra messaggio di successo sul form
    this.success = true;
    form.controls['emailforreset'].setErrors(null);
    console.log('Email is valid');
    this.forgotPasswordSubscription = this.authService.forgotPassword(this.modelForgotPassword())
      .subscribe({
        next: (response) => {
          console.log('Email sent', response);
        },
        error: (error) => {
          console.error('Error sending email', error);
        },
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loginSubscription = this.authService.loginUser(this.model())
        .subscribe({
          next: (response) => {
            console.log(response);
            this.cookieService.set('Authorization', `Bearer ${response.token}`, undefined, '/', undefined, true, 'Strict');
            const user: User = {
              email: response.email,
              roles: response.roles
            };
            this.authService.setUser(user);
            this.router.navigate(['/admin/recipes']);
          },
          error: (error) => {
            console.error('Error logging user', error);
          },
        });
    }
    else {
      console.error('Form is invalid', form.errors);
    }

  }

  onShowPassword() {
    this.showPassword.set(!this.showPassword());
  }

  model = signal<LoginRequest>({
    email: '',
    password: ''
  });

  modelForgotPassword = signal<ForgotPassword>({
    Email:''
  });

  showPassword = signal<boolean>(false);

  success: boolean = false;
  private loginSubscription?: Subscription;
  private forgotPasswordSubscription?: Subscription;

}
