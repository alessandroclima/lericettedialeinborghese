import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // 🔐 Gestione centralizzata degli errori
     switch (error.status) {
        case 401:
          toastr.warning('Sessione scaduta. Effettua nuovamente il login.', '401 - Non autorizzato');
          router.navigate(['/login']);
          break;

        case 403:
          toastr.error('Non hai i permessi per accedere a questa risorsa.', '403 - Accesso negato');
          break;

        case 404:
          toastr.info('La risorsa richiesta non è stata trovata.', '404 - Non trovata');
          break;

        default:
          toastr.error(error.error?.message || 'Errore imprevisto dal server.', 'Errore');
          break;
      }

      // ❌ Propaga l'errore verso il subscriber (opzionale)
      return throwError(() => error);
    })
  );
};
