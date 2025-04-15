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
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const authService = inject(AuthService);

  const tokenWithBearer = cookieService.get('Authorization');
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
    const roles = payload.roles || authService.getUser()?.roles || [];
    if (!roles.includes('writer')) {
      alert('Non hai i permessi per accedere a questa pagina!');
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
