import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { IngredientQuantity } from '../models/ingredient-quantity.model';
import { IngredientService } from '../services/ingredient.service';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ButtonModule, Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
 // ✅ Importa il modulo di PrimeNG

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.css'],
    imports: [FormsModule, Button]
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  model: AddRecipeRequest;

  private addRecipeSubscription?: Subscription;

  availableIngredients: GetIngredientResponse[] = [];

  selectedIngredient: number | undefined = undefined;
  ingredientQuantity: number | null = null;
  ingredientMeasure: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  constructor(
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.model = {
      titolo: '',
      descrizione: '',
      tempocottura: null,
      porzioni: 1,
      procedimento: '',
      immagineUrl: '',
      ingredientiquantita: [],
    };
  }
  ngOnInit(): void {
    this.loadAvailableIngredients();
    console.log(this.selectedIngredient);
  }

  loadAvailableIngredients(): void {
    this.ingredientService.getIngredients().subscribe(
      (data) => {
        this.availableIngredients = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      },
      (error) => {
        console.error('Error fetching ingredients', error);
      }
    );
  }

  addIngredient(): void {
    if (this.selectedIngredient) {
      this.model.ingredientiquantita.push({
        ingredienteId: this.selectedIngredient,
        ingredienteNome: this.availableIngredients.find(
          (x) => x.id == this.selectedIngredient
        )!.name,
        quantita: this.ingredientQuantity,
        unitaMisura: this.ingredientMeasure,

      });
      this.selectedIngredient = undefined;
      this.ingredientQuantity = null;
      this.ingredientMeasure = '';
    }
  }

  removeIngredient(ingredientNome: string): void {
    if (ingredientNome) {
      const index = this.model.ingredientiquantita.findIndex(
        (ingredient) => ingredient.ingredienteNome === ingredientNome
      );
      if (index !== -1) {
        this.model.ingredientiquantita.splice(index, 1);
      }
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
    } else {
      this.imageUrl = null;
      this.model.immagineUrl = '';
    }
  }

  onSubmit() {
    console.log(this.model);
    this.addRecipeSubscription = this.recipeService
      .addRecipe(this.model)
      .subscribe({
        next: (response) => {
          console.log('Recipe added');
          this.router.navigate(['/admin/recipes']);
        },
        error: (error) => {
          console.error('Error adding recipe', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.addRecipeSubscription) {
      this.addRecipeSubscription.unsubscribe();
    }
  }
}
