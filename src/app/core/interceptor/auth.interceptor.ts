import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('Authorization');

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `${token}`)
    });
    return next(cloned);
  }

  return next(req);
};
