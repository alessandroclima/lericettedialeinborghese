import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../models/register-request.model';
import { ResetPassword } from '../models/reset-password.model';
import { ForgotPassword } from '../models/forgot-password.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private cookieService = inject(CookieService)

  $user = new BehaviorSubject<User | undefined>(undefined);

  private loginUserUrl = `${environment.apiBaseUrl}/api/Auth/Login`;
  private registerUserUrl = `${environment.apiBaseUrl}/api/Auth/Register`;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  resetPassword(resetPassword: ResetPassword): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Auth/reset-password`, resetPassword);
  }
  forgotPassword(email: ForgotPassword): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Auth/forgot-password`, { email });
  }

  loginUser(model: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUserUrl, model);
  }

  registerUser(model: RegisterRequest): Observable<void> {
    return this.http.post<void>(this.registerUserUrl, model);
  }

  setUser(user: User): void {
    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
  }

  user(): Observable<User | undefined> {
    return this.$user.asObservable();
  }

  logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
  }

  getUser(): User | undefined {
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');
    if (email && roles) {
      const user: User = {
        email: email,
        roles: roles.split(',')
      }
      return user;
    }
    return undefined;
  }
}
