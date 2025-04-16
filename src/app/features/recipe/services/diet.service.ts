import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetCategoryResponse } from '../models/get-category-response.model';
import { Observable } from 'rxjs';
import { GetDietResponse } from '../models/get-diet-response.model';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  private http = inject(HttpClient);


  private apiUrl = `${environment.apiBaseUrl}/Diet/GetDiets`;
  constructor() { }

  getDiets(): Observable<GetDietResponse[]> {
    return this.http.get<GetDietResponse[]>(this.apiUrl);
  }
}
