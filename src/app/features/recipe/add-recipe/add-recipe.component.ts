import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { IngredientQuantity } from '../models/ingredient-quantity.model';
import { IngredientService } from '../services/ingredient.service';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit, OnDestroy {

  model: AddRecipeRequest;

  private addRecipeSubscription?: Subscription;

  availableIngredients: GetIngredientResponse[] = [];

  selectedIngredient: number = 0;
  ingredientQuantity: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private ingredientService: IngredientService, private recipeService: RecipeService, private router: Router) {
    this.model = {
      titolo: '',
      descrizione: '',
      tempocottura: 0,
      porzioni: 0,
      procedimento: '',
      immagineUrl: '',
      ingredientiquantita: []
    };

  }
  ngOnInit(): void {
    this.loadAvailableIngredients();
  }

  loadAvailableIngredients(): void {
    this.ingredientService.getIngredients().subscribe(
      (data) => {
        this.availableIngredients = data.sort((a, b) => a.name.localeCompare(b.name));
      },
      (error) => {
        console.error('Error fetching ingredients', error);
      }
    );
  }

  addIngredient(): void {
    if (this.selectedIngredient && this.ingredientQuantity) {
      this.model.ingredientiquantita.push({
        ingredienteId: this.selectedIngredient,
        ingredienteNome: this.availableIngredients.find(x => x.id == this.selectedIngredient)!.name,
        quantita: this.ingredientQuantity
      });
      this.selectedIngredient = 0;
      this.ingredientQuantity = '';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target?.result;
        this.model.immagineUrl = e.target.result.split(',')[1]; // Rimuove il prefisso "data:image/png;base64,"
      };
      reader.readAsDataURL(file);
    }
    else {
      this.imageUrl = null;
      this.model.immagineUrl = '';
    }
  }

  onSubmit() {
    console.log(this.model);
    this.addRecipeSubscription = this.recipeService.addRecipe(this.model).subscribe({
      next: (response) => {
        console.log('Recipe added');
        this.router.navigate(['/admin/recipes']);
      },
      error: (error) => {
        console.error('Error adding recipe', error);
      }
    }
    );
  }

  ngOnDestroy(): void {
    if (this.addRecipeSubscription) {
      this.addRecipeSubscription.unsubscribe();
    }
  }

}
