import { Injectable } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetRecipeResponse } from '../models/get-recipe-response.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrlCreate = 'http://localhost:14760/Recipes/CreateRecipe';
  private apiUrlGet = 'http://localhost:14760/Recipes/GetRecipes';
  private apiUrlDelete = 'http://localhost:14760/Recipes/DeleteRecipe';
  private apiUrlGetDetails = 'http://localhost:14760/Recipes/GetRecipes';

  constructor(private http: HttpClient) { }

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
}
