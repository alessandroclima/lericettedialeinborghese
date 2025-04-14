import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetCategoryResponse } from '../models/get-category-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);


  private apiUrl = `${environment.apiBaseUrl}/Ingredients/GetCategories`;
  constructor() { }

  getCategories(): Observable<GetCategoryResponse[]> {
    return this.http.get<GetCategoryResponse[]>(this.apiUrl);
  }
}
