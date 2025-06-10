import { Injectable, inject } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { UpdateRecipeRequest } from '../models/update-recipe-request.model';
import { VoteRecipeRequest } from '../models/vote-recipe-request.model';
import { GetRecipeDetailResponse } from '../models/get-recipe-detail-response.model';
import { GetRecipeListRequest } from '../models/get-recipe-list-request.modest';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient);
  private cookieService = inject(CookieService)
  private apiUrlCount = `${environment.apiBaseUrl}/Recipes/Count`;
  private apiUrlCreate = `${environment.apiBaseUrl}/Recipes/CreateRecipe`;
  private apiUrlGet = `${environment.apiBaseUrl}/Recipes/GetRecipes`;
  private apiUrlDelete = `${environment.apiBaseUrl}/Recipes/DeleteRecipe`;
  private apiUrlGetDetails = `${environment.apiBaseUrl}/Recipes/GetRecipes`;
  private apiUrlUpdate = `${environment.apiBaseUrl}/Recipes/UpdateRecipe`;
  private apiUrlRelated = `${environment.apiBaseUrl}/Recipes/GetRelatedRecipes`;
  private apiUrlVote = `${environment.apiBaseUrl}/Recipes/VoteRecipe`;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  addRecipe(model: AddRecipeRequest): Observable<void> {
    return this.http.post<void>(this.apiUrlCreate, model);
  }

  voteRecipe(model: VoteRecipeRequest): Observable<void> {
    return this.http.post<void>(this.apiUrlVote, model);
  }

  getRecipesCount(categoryQuery?: string, searchQuery?: string): Observable<number> {
     let params = new HttpParams();
    if (categoryQuery) {
      params = params.set('categoryQuery', categoryQuery);
    }

    if (searchQuery) {
      params = params.set('searchQuery', searchQuery);
    }
    return this.http.get<number>(`${this.apiUrlCount}`,{ params: params }).pipe(
      catchError(error => {
        console.error('Errore durante la richiesta:', error);
        return throwError(() => new Error('Errore nel caricamento del conteggio delle ricette. Riprova più tardi.'));
      })
    );
  }

  getRecipes(categoryQuery?: string, searchQuery?: string, sortBy?: string, orderBy?: string, pageNumber?: number, pageSize?: number): Observable<GetRecipeDetailResponse[]> {

    let params = new HttpParams();
    if (categoryQuery) {
      params = params.set('categoryQuery', categoryQuery);
    }

    if (searchQuery) {
      params = params.set('searchQuery', searchQuery);
    }

    if (sortBy) {
      params = params.set('sortBy', sortBy);
    }

    if (orderBy) {
      params = params.set('orderBy', orderBy);
    }

    if (pageNumber) {
      params = params.set('pageNumber', pageNumber);
    }

    if (pageSize) {
      params = params.set('pageSize', pageSize);
    }

    return this.http.get<GetRecipeDetailResponse[]>(this.apiUrlGet, { params: params }).pipe(
      catchError(error => {
        console.error('Errore durante la richiesta:', error);
        return throwError(() => new Error('Errore nel caricamento delle ricette. Riprova più tardi.'));
      })
    );
  }

  getRelatedRecipes(categoriaNome: string): Observable<GetRecipeResponse[]> {
    return this.http.get<GetRecipeResponse[]>(`${this.apiUrlRelated}/${categoriaNome}`).pipe(
      catchError(error => {
        console.error('Errore durante la richiesta:', error);
        return throwError(() => new Error('Errore nel caricamento delle ricette. Riprova più tardi.'));
      })
    );
  }

  getRecipeDetails(id: string): Observable<GetRecipeDetailResponse> {
    return this.http.get<GetRecipeDetailResponse>(`${this.apiUrlGetDetails}/${id}`).pipe(
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

  updateRecipe(model: UpdateRecipeRequest): Observable<void> {
    return this.http.put<void>(this.apiUrlUpdate, model);
  }
}
