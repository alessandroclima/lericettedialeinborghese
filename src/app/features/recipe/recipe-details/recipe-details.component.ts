import { Component } from '@angular/core';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IngredientQuantity } from '../models/ingredient-quantity.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  onEnterPressed() {
    if (this.recipe?.ingredientiQuantita) {
      this.ingredientiQuantita = this.ingredientiQuantita = this.recipe.ingredientiQuantita.map(ing => ({ ...ing }));
      this.ingredientiQuantita.forEach((element) => {
        element.quantita != null && element.quantita > 0,
        element.quantita = (element.quantita! / this.recipe?.porzioni!) * this.numero;
      })
    }
  }
  recipe: GetRecipeResponse | null = null;
  ingredientiQuantita: IngredientQuantity[] = [];
  getDetailsSubscription?: Subscription;
  recipeId: string | null = null;
  numero: number = 1;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {


  }
  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.loadRecipe(this.recipeId);
      
    }

  }

  loadRecipe(id: string): void {
    this.getDetailsSubscription = this.recipeService.getRecipeDetails(id).subscribe(
      {
        next: (response) => {
          this.recipe = response;
          this.ingredientiQuantita = this.recipe.ingredientiQuantita.map(ing => ({ ...ing }));
          this.numero = this.recipe.porzioni;
          console.log(this.ingredientiQuantita);
        },
        error: (error) => {
          console.error('Error loading recipe', error);
        }
      }
    );
  }
}
