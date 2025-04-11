import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private http = inject(HttpClient);


  private apiUrl = `${environment.apiBaseUrl}/Ingredients/GetIngredients`;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  getIngredients(): Observable<GetIngredientResponse[]> {
    return this.http.get<GetIngredientResponse[]>(this.apiUrl);
  }
}
