import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { GetRecipeDetailResponse } from '../models/get-recipe-detail-response.model';
import { User } from '../../auth/models/user.model';
import { AuthService } from '../../auth/services/auth.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { GetRecipeListRequest } from '../models/get-recipe-list-request.modest';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [FormsModule, RouterLink]
})
export class RecipeListComponent implements OnInit {

  //inject dei services
  private authService = inject(AuthService)
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private renderer = inject(Renderer2);
  private toastr = inject(ToastrService)

  //dichiarazione delle variabili
  private getRecipeSubscription?: Subscription;
  private deleteRecipeSubscription?: Subscription;
  private detailsRecipeSubscription?: Subscription;
  availableRecipes: GetRecipeDetailResponse[] = [];
  errorMessage: string | null = null;
  filteredRecipes: GetRecipeDetailResponse[] = [];
  searchQuery: string = '';
  categoryQuery: string = '';
  recipeIdToDelete: string | null = null;
  user?: User;
  pagination: GetRecipeListRequest = {
    pageNumber: 1,
    pageSize: 10,
    searchQuery: '',
    categoryQuery: ''
  }

  constructor() { }

  //metodi per la logica
  // detailsRecipe(arg0: string) {
  //   this.detailsRecipeSubscription = this.recipeService.getRecipeDetails(arg0).subscribe({
  //     next: (response) => {
  //       console.log('Recipe details', response);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching recipe details', error);
  //       this.errorMessage = error.message;
  //     },
  //     complete: () => console.log('Chiamata API completata')
  //   });
  // }
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

  openDeleteModal(recipeId: string): void {
    this.recipeIdToDelete = recipeId;
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      this.renderer.addClass(modalElement, 'show');
      this.renderer.setStyle(modalElement, 'display', 'block');
      this.renderer.setAttribute(modalElement, 'aria-modal', 'true');
      this.renderer.setAttribute(modalElement, 'role', 'dialog');
    }
  }

  closeDeleteModal(): void {
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      this.renderer.removeClass(modalElement, 'show');
      this.renderer.setStyle(modalElement, 'display', 'none');
      this.renderer.removeAttribute(modalElement, 'aria-modal');
      this.renderer.removeAttribute(modalElement, 'role');
    }
  }

  confirmDelete(): void {
    if (this.recipeIdToDelete !== null) {
      this.recipeService.deleteRecipe(this.recipeIdToDelete).subscribe(
        () => {
          this.loadRecipes();
          this.recipeIdToDelete = null;
          this.closeDeleteModal();
        },
        (error) => {
          this.errorMessage = 'Errore nell\'eliminazione della ricetta';
        }
      );
    }
  }

   showToast() {
    console.log('Click sul bottone, mostro toast');
    this.toastr.success('Test toast visibile!', 'Successo');}

  ngOnInit(): void {

    //recupero il valore dello user dall'auth service
    this.authService.user().subscribe({
      next: (response) => this.user = response
      
    });
    this.user = this.authService.getUser();
            console.log(this.user?.username)
    // Recupera il valore della ricerca dall'URL
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.categoryQuery = params['category'] || '';
      this.loadRecipes();
    });
  }

 

  loadRecipes(): void {
    this.getRecipeSubscription = this.recipeService.getRecipes(this.pagination).subscribe({
      next: (response) => {
        this.availableRecipes = response;
        console.log(this.availableRecipes)
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
    console.log('Filtering recipes with text:', this.searchQuery);
    if (this.searchQuery) {
      this.filteredRecipes = this.availableRecipes.filter(recipe =>
        recipe.titolo.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    else if (this.categoryQuery) {
      console.log('Filtering recipes with category:', this.categoryQuery);
      this.filteredRecipes = this.availableRecipes.filter(recipe =>
        recipe.categorianome.includes(this.categoryQuery)
      );
    }
    else {
      this.filteredRecipes = this.availableRecipes;
    }


  };


}
