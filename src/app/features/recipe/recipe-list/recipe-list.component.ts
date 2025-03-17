import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  private getRecipeSubscription?: Subscription;
  private deleteRecipeSubscription?: Subscription;
  private detailsRecipeSubscription?: Subscription;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  availableRecipes: GetRecipeResponse[] = [];
  errorMessage: string | null = null;
  filteredRecipes: GetRecipeResponse[] = [];
  searchQuery: string = '';


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



  ngOnInit(): void {
    this.loadRecipes();

    // Recupera il valore della ricerca dall'URL
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      this.filterRecipes();
    });

  }

  loadRecipes(): void {
    this.getRecipeSubscription = this.recipeService.getRecipes().subscribe({
      next: (response) => {
        console.log('Recipe loaded', response);

        this.availableRecipes = response;
        this.filterRecipes();
      },
      error: (error) => {
        console.error('Error fetching recipes', error);
        this.errorMessage = error.message;
      },
      complete: () => console.log('Chiamata API completata')
    }
    );
  }

  filterRecipes() {
    this.filteredRecipes = this.availableRecipes.filter(recipe =>
      recipe.titolo.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  };


}
