import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { decodeJwt } from 'jose';
import { catchError, map, of } from 'rxjs';

interface JwtPayload {
  exp: number;
  roles?: string[];
  // altri campi utili come sub, email, etc.
}

export const authGuard: CanActivateFn = (route, state) => {
  console.log('🔐 AuthGuard triggered for route:', state.url); // 👈
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const authService = inject(AuthService);

  const tokenWithBearer = cookieService.get('Authorization');
  console.log(tokenWithBearer);
  
  if (!tokenWithBearer?.startsWith('Bearer ')) {
    // Try refresh token before redirecting
    if (authService.hasValidRefreshToken()) {
      return authService.refreshToken().pipe(
        map(() => true),
        catchError(() => {
          authService.logout();
          return of(router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } }));
        })
      );
    }
    
    authService.logout();
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }

  const token = tokenWithBearer.replace('Bearer ', '');

  try {
    const payload = decodeJwt<JwtPayload>(token);

    // Check if token is expired or about to expire (within 1 minute)
    const expirationTime = payload.exp * 1000;
    const currentTime = Date.now();
    const bufferTime = 60 * 1000; // 1 minute buffer

    if (expirationTime < currentTime) {
      // Token expired, try refresh
      if (authService.hasValidRefreshToken()) {
        return authService.refreshToken().pipe(
          map(() => true),
          catchError(() => {
            authService.logout();
            return of(router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } }));
          })
        );
      }
      authService.logout();
      return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    }

    // Proactively refresh if token is about to expire
    if (expirationTime - currentTime < bufferTime && authService.hasValidRefreshToken()) {
      authService.refreshToken().subscribe(); // Fire and forget
    }

    // 🔐 Controllo ruoli (writer richiesto)
    const userRoles = payload.roles || authService.getUser()?.roles || [];
    const requiredRoles = route.data?.['roles'] as string[] | undefined;
    if (requiredRoles && !requiredRoles.some(role => userRoles.includes(role))) {
      alert('Accesso negato. Non hai i permessi necessari.');
      return false;
    }

    // Controllo dell'autore della ricetta nel caso di update
    // const routeAuthor = route.paramMap.get('author');
    // console.log(routeAuthor)
    // const currentUsername = authService.getUser()?.username;
    // if (routeAuthor !== null && routeAuthor !== currentUsername) {
    //   alert('Non puoi modificare ricette di altri utenti.');
    //   return false;
    // }

    // ✅ Accesso consentito
    return true;

  } catch (err) {
    // 🛑 Token malformato o errore in decodifica
    authService.logout();
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
};
