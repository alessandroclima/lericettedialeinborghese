import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { decodeJwt } from 'jose';

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
    authService.logout();
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }

  const token = tokenWithBearer.replace('Bearer ', '');

  try {
    const payload = decodeJwt<JwtPayload>(token);

    // ⏳ Verifica scadenza
    if (!payload.exp || payload.exp * 1000 < Date.now()) {
      authService.logout();
      return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    }

    // 🔐 Controllo ruoli (writer richiesto)
    const userRoles = payload.roles || authService.getUser()?.roles || [];
    const requiredRoles = route.data?.['roles'] as string[] | undefined;
    if (requiredRoles && !requiredRoles.some(role => userRoles.includes(role))) {
      alert('Accesso negato. Non hai i permessi necessari.');
      return false;
    }

    // ✅ Accesso consentito
    return true;

  } catch (err) {
    // 🛑 Token malformato o errore in decodifica
    authService.logout();
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
};
