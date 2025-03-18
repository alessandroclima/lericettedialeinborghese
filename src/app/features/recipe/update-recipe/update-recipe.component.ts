import { Component } from '@angular/core';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { IngredientService } from '../services/ingredient.service';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { Subscription } from 'rxjs';
import { UpdateRecipeRequest } from '../models/update-recipe-request.model';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent {
  removeIngredient(ingredientNome: string) {
    if (ingredientNome) {
      const index = this.model.ingredientiQuantita.findIndex(
        (ingredient) => ingredient.ingredienteNome === ingredientNome
      );
      if (index !== -1) {
        this.model?.ingredientiQuantita.splice(index, 1);
      }
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.model.immagineurl = e.target.result.split(',')[1]; // Rimuove il prefisso "data:image/png;base64,"
      };
      reader.readAsDataURL(file);
    } else {
      this.model.immagineurl = '';
    }
  }
  addIngredient() {
    console.log('Adding ingredient');
    console.log(
      this.availableIngredients.find((x) => x.id == this.selectedIngredient)!
        .name
    );
    if (this.selectedIngredient && this.ingredientQuantity) {
      this.model?.ingredientiQuantita.push({
        ingredienteId: this.selectedIngredient,
        quantita: this.ingredientQuantity,
        ingredienteNome: this.availableIngredients.find(
          (x) => x.id == this.selectedIngredient
        )!.name,
      });
      this.selectedIngredient = 0;
      this.ingredientQuantity = '';
    }
  }
  onSubmit() {
    if (this.model) {
      this.updateRecipeSubscription = this.recipeService
        .updateRecipe(this.model)
        .subscribe({
          next: () => {
            console.log('Recipe updated');
            this.router.navigate(['/admin/recipes']);
          },
          error: (error) => {
            console.error('Error updating recipe', error);
          },
        });
    }
  }

  constructor(
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.model = {
      id: '',
      titolo: '',
      descrizione: '',
      tempocottura: 0,
      porzioni: 0,
      procedimento: '',
      immagineurl: '',
      ingredientiQuantita: [],
    };
  }

  availableIngredients: GetIngredientResponse[] = [];
  selectedIngredient: number = 0;
  ingredientQuantity: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  model: GetRecipeResponse;
  getDetailsSubscription?: Subscription;
  getIngredientsSubscription?: Subscription;
  updateRecipeSubscription?: Subscription;
  recipeId: string | null = null;

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.loadRecipe(this.recipeId);
      this.loadIngredients();
    }
  }

  loadRecipe(id: string): void {
    this.getDetailsSubscription = this.recipeService
      .getRecipeDetails(id)
      .subscribe({
        next: (response) => {
          console.log('Recipe loaded');
          console.log(response);
          this.model = response;
        },
        error: (error) => {
          console.error('Error loading recipe', error);
        },
      });
  }

  loadIngredients(): void {
    this.getIngredientsSubscription = this.ingredientService
      .getIngredients()
      .subscribe({
        next: (response) => {
          console.log('Ingredients loaded');
          console.log(response);
          this.availableIngredients = response;
        },
        error: (error) => {
          console.error('Error loading ingredients', error);
        },
      });
  }
}
