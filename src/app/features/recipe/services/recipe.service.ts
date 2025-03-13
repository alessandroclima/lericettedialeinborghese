import { Injectable } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

}
