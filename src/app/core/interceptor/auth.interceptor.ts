import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../features/auth/services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';

let isRefreshing = false;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = cookieService.get('Authorization');

  // Clone request with token if available
  const clonedReq = token 
    ? req.clone({ headers: req.headers.set('Authorization', token) })
    : req;

  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // If 401 and not already refreshing and not the refresh endpoint itself
      if (error.status === 401 && !isRefreshing && !req.url.includes('refresh-token')) {
        isRefreshing = true;

        // Check if refresh token exists
        if (!authService.hasValidRefreshToken()) {
          isRefreshing = false;
          authService.logout();
          router.navigate(['/login']);
          return throwError(() => error);
        }

        // Attempt to refresh token
        return authService.refreshToken().pipe(
          switchMap((response) => {
            isRefreshing = false;
            // Retry original request with new token
            const newToken = `Bearer ${response.token}`;
            const retryReq = req.clone({
              headers: req.headers.set('Authorization', newToken)
            });
            return next(retryReq);
          }),
          catchError((refreshError) => {
            isRefreshing = false;
            authService.logout();
            router.navigate(['/login']);
            return throwError(() => refreshError);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
