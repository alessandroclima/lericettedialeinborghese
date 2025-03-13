import { Component } from '@angular/core';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  ingredients: GetIngredientResponse[] = [];

  /**
   *
   */
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.ingredientService.getIngredients().subscribe((data) => {
      this.ingredients = data;
    },
      (error) => {
        console.error('Error fetching ingredients', error);
      });
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
