import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../models/register-request.model';
import { ResetPassword } from '../models/reset-password.model';
import { ForgotPassword } from '../models/forgot-password.model';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private cookieService = inject(CookieService)

  $user = new BehaviorSubject<User | undefined>(undefined);

  private loginUserUrl = `${environment.apiBaseUrl}/api/Auth/Login`;
  private registerUserUrl = `${environment.apiBaseUrl}/api/Auth/Register`;
  private refreshTokenUrl = `${environment.apiBaseUrl}/api/Auth/refresh-token`;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  resetPassword(resetPassword: ResetPassword): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Auth/reset-password`, resetPassword);
  }
  forgotPassword(model: ForgotPassword): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Auth/forgot-password`,  model );
  }

  loginUser(model: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUserUrl, model).pipe(
      tap(response => this.storeTokens(response))
    );
  }

  registerUser(model: RegisterRequest): Observable<void> {
    return this.http.post<void>(this.registerUserUrl, model);
  }

  refreshToken(): Observable<LoginResponse> {
    const refreshToken = this.cookieService.get('RefreshToken');
    
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http.post<LoginResponse>(this.refreshTokenUrl, { refreshToken }).pipe(
      tap(response => this.storeTokens(response)),
      catchError(error => {
        this.logout();
        return throwError(() => error);
      })
    );
  }

  private storeTokens(response: LoginResponse): void {
    // Store access token (short-lived)
    const tokenExpiration = new Date(response.tokenExpiration);
    this.cookieService.set(
      'Authorization', 
      `Bearer ${response.token}`, 
      tokenExpiration,
      '/', 
      undefined, 
      true, 
      'Strict'
    );

    // Store refresh token (long-lived)
    const refreshExpiration = new Date();
    refreshExpiration.setDate(refreshExpiration.getDate() + 7); // 7 days
    this.cookieService.set(
      'RefreshToken', 
      response.refreshToken, 
      refreshExpiration,
      '/', 
      undefined, 
      true, 
      'Strict'
    );
  }

  setUser(user: User): void {
    this.$user.next(user);
    localStorage.setItem('user-username',user.username);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
  }

  user(): Observable<User | undefined> {
    return this.$user.asObservable();
  }

  logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.cookieService.delete('RefreshToken', '/');
    this.$user.next(undefined);
  }

  getUser(): User | undefined {
    const username = localStorage.getItem('user-username');
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');
    if (username && email && roles) {
      const user: User = {
        username: username,
        email: email,
        roles: roles.split(',')
      }
      return user;
    }
    return undefined;
  }

  hasValidRefreshToken(): boolean {
    return !!this.cookieService.get('RefreshToken');
  }
}
