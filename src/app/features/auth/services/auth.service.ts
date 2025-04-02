import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);


  private registerUserUrl = 'http://localhost:14760/api/Auth/Login';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  registerUser(model: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.registerUserUrl, model);
  }
}
