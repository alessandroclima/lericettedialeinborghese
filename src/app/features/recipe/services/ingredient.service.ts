import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private http = inject(HttpClient);


  private apiUrl = 'http://localhost:14760/Ingredients/GetIngredients';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  getIngredients(): Observable<GetIngredientResponse[]> {
    return this.http.get<GetIngredientResponse[]>(this.apiUrl);
  }
}
