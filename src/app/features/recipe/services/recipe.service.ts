import { Injectable, inject } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient);
  private cookieService = inject(CookieService)

  private apiUrlCreate = `${environment.apiBaseUrl}/Recipes/CreateRecipe`;
  private apiUrlGet = `${environment.apiBaseUrl}/Recipes/GetRecipes`;
  private apiUrlDelete = `${environment.apiBaseUrl}/Recipes/DeleteRecipe`;
  private apiUrlGetDetails = `${environment.apiBaseUrl}/Recipes/GetRecipes`;
  private apiUrlUpdate = `${environment.apiBaseUrl}/Recipes/UpdateRecipe`;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  addRecipe(model: AddRecipeRequest): Observable<void> {
    return this.http.post<void>(this.apiUrlCreate, model);
  }

  getRecipes(): Observable<GetRecipeResponse[]> {
    return this.http.get<GetRecipeResponse[]>(this.apiUrlGet).pipe(
      catchError(error => {
        console.error('Errore durante la richiesta:', error);
        return throwError(() => new Error('Errore nel caricamento delle ricette. Riprova più tardi.'));
      })
    );
  }

  getRecipeDetails(id:string): Observable<GetRecipeResponse> {
    return this.http.get<GetRecipeResponse>(`${this.apiUrlGetDetails}/${id}`).pipe(
      catchError(error => {
        console.error('Errore durante la richiesta:', error);
        return throwError(() => new Error('Errore nel caricamento delle ricette. Riprova più tardi.'));
      })
    );
  }

  deleteRecipe(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlDelete}/${id}`).pipe(
      catchError(error => {
        console.error('Errore durante la richiesta:', error);
        return throwError(() => new Error('Errore durante l\'eliminazione della ricetta. Riprova più tardi.'));
      })
    );
  }

  updateRecipe(model: GetRecipeResponse): Observable<void> {
    return this.http.put<void>(this.apiUrlUpdate, model);
  }
}
