import { Component, inject } from '@angular/core';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { IngredientService } from '../services/ingredient.service';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.css'],
    imports: [FormsModule, NgxPaginationModule]
})
export class IngredientListComponent {
  private ingredientService = inject(IngredientService);

  ingredients: GetIngredientResponse[] = [];

  page: number = 1; // Pagina attuale
  pageSize: number = 10; // Numero di elementi per pagina
  filteredIngredients: GetIngredientResponse[] = []; // Lista filtrata per la tabella
  searchText: string = '';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]); // Testo di ricerca
  constructor() { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.ingredientService.getIngredients().subscribe((data) => {
      this.ingredients = data.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredIngredients = data.sort((a, b) => a.name.localeCompare(b.name));
    },
      (error) => {
        console.error('Error fetching ingredients', error);
      });
  }


  filterIngredients() {
    this.filteredIngredients = this.ingredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addIngredient() {
    // Implementa la logica per aggiungere un ingrediente
  }

  editIngredient(ingredient: string) {
    // Implementa la logica per modificare un ingrediente
  }

  deleteIngredient(ingredient: string) {
    // Implementa la logica per eliminare un ingrediente
  }
}
