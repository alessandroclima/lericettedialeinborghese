import { Component } from '@angular/core';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe: GetRecipeResponse | null = null;
  getDetailsSubscription?: Subscription;
  recipeId: string | null = null;
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
          console.log('Recipe loaded');
          console.log(response);
          this.recipe = response;
          console.log(response.ingredientiQuantita);
          console.log(this.recipe.ingredientiQuantita);
        },
        error: (error) => {
          console.error('Error loading recipe', error);
        }
      }
    );
  }
}
