import { Component, inject, Inject, signal, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Divider, DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../models/login-request.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  imports: [DividerModule, ButtonModule, InputTextModule, CardModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  private authService= inject(AuthService);
  private router = inject(Router)
  private cookieService = inject(CookieService)

  onSubmit() {
    console.log(this.model);
    this.loginSubscription = this.authService.registerUser(this.model())
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

  model = signal<LoginRequest>({
    email: '',
    password:''
  });

 

  private loginSubscription?: Subscription;


}
