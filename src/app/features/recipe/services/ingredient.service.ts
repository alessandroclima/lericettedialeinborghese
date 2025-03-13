import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:14760/Ingredients/GetIngredients';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<GetIngredientResponse[]> {
    return this.http.get<GetIngredientResponse[]>(this.apiUrl);
  }
}
