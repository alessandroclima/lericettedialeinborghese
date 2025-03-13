import { Component } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { IngredientQuantity } from '../models/ingredient-quantity.model';
import { IngredientService } from '../services/ingredient.service';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

model: AddRecipeRequest;

availableIngredients: GetIngredientResponse[]= [];

selectedIngredient:number = 0;
ingredientQuantity:string = '';
constructor(private ingredientService: IngredientService) {
  this.model = {
    titolo: '',
    descrizione: '',
    tempocottura: 0,
    porzioni: 0,
    procedimento: '',
    immagineUrl: '',
    ingredienti: []
  };
  
}
ngOnInit(): void {
  this.loadAvailableIngredients();
}

loadAvailableIngredients(): void {
  this.ingredientService.getIngredients().subscribe(
    (data) => {
      this.availableIngredients = data;
    },
    (error) => {
      console.error('Error fetching ingredients', error);
    }
  );
}

addIngredient(): void {
  if (this.selectedIngredient && this.ingredientQuantity) {
    this.model.ingredienti.push({
      ingredientId: this.selectedIngredient,
      ingredientName: this.availableIngredients.find(x => x.id == this.selectedIngredient)!.name,
      quantity: this.ingredientQuantity
    });
    this.selectedIngredient = 0;
    this.ingredientQuantity = '';
  }
}

onSubmit() {
  console.log(this.model);
}

}
