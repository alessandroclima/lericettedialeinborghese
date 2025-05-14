import { Component, inject, signal } from '@angular/core';
import { ResetPassword } from '../models/reset-password.model';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  onSubmit(form: NgForm) {
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
    this.authService.resetPassword(this.model()).subscribe({
      next: () => {
        console.log('Password reset successfully');
        this.router.navigateByUrl('/login').then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        console.error('Error registering user', error);
      }
    });
  }


  constructor(private route: ActivatedRoute) {
        
  }

  private authService = inject(AuthService);
  private router = inject(Router);
  samePassword: boolean = false;
  model = signal<ResetPassword>({
    email: '',
    password: '',
    confirmPassword: '',
    token: ''
  });

  ngOnInit() {
    this.model().email = this.route.snapshot.queryParamMap.get('email')!;
    this.model().token = this.route.snapshot.queryParamMap.get('token')!;
  }
}
