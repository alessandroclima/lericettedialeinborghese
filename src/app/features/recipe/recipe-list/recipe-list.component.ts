import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../models/get-recipe-response.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  detailsRecipe(arg0: string) {
    this.detailsRecipeSubscription = this.recipeService.getRecipeDetails(arg0).subscribe({
      next: (response) => {
        console.log('Recipe details', response);
      },
      error: (error) => {
        console.error('Error fetching recipe details', error);
        this.errorMessage = error.message;
      },
      complete: () => console.log('Chiamata API completata')
    });
  }
  deleteRecipe(arg0: string) {
    this.deleteRecipeSubscription = this.recipeService.deleteRecipe(arg0).subscribe({
      next: (response) => {
        console.log('Recipe deleted', response);
        this.loadRecipes();
      },
      error: (error) => {
        console.error('Error deleting recipe', error);
        this.errorMessage = error.message;
      },
      complete: () => console.log('Chiamata API completata')
    });
  }
  editRecipe(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private getRecipeSubscription?: Subscription;
  private deleteRecipeSubscription?: Subscription;
  private detailsRecipeSubscription?: Subscription;
  constructor(private recipeService: RecipeService) { }
  availableRecipes: GetRecipeResponse[] = [];
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.loadRecipes();

  }

  loadRecipes(): void {
    this.getRecipeSubscription = this.recipeService.getRecipes().subscribe({
      next: (response) => {
        console.log('Recipe loaded', response);

        this.availableRecipes = response;
      },
      error: (error) => {
        console.error('Error fetching recipes', error);
        this.errorMessage = error.message;
      },
      complete: () => console.log('Chiamata API completata')
    }
    );
  }


}
