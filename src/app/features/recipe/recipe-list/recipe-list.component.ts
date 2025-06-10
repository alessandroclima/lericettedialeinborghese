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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [FormsModule, RouterLink, CommonModule]
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
  filterText: string = '';
  searchQuery: string = '';
  categoryQuery: string = '';
  recipesCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 5;
  list: number[] = [];
  recipeIdToDelete: string | null = null;
  user?: User;

  constructor() { }

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
    this.toastr.success('Test toast visibile!', 'Successo');
  }

  ngOnInit(): void {

    //recupero il valore dello user dall'auth service
    this.authService.user().subscribe({
      next: (response) => this.user = response

    });
    this.user = this.authService.getUser();
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.categoryQuery = params['category'] || '';
      this.recipeService.getRecipesCount(this.categoryQuery, this.searchQuery).subscribe({
        next: (response) => {
          this.recipesCount = response;
          console.log('Total recipes count:', response);
          // Calcola il numero di pagine necessarie
          if (response < 5) {
            this.pageSize = response;
          }
          else{
            this.pageSize = 5;
          }
          this.list = new Array(Math.ceil(response / this.pageSize));
          this.loadRecipes();

        },
        error: (error) => {
          console.error('Error loading recipes count', error);
        }
      });

    })
  }



  loadRecipes(): void {
    this.getRecipeSubscription = this.recipeService.getRecipes(this.categoryQuery, this.searchQuery, undefined, undefined, this.pageNumber, this.pageSize).subscribe({
      next: (response) => {
        this.availableRecipes = response;
        this.filteredRecipes = this.availableRecipes;
        console.log(this.availableRecipes)
      },
      error: (error) => {
        console.error('Error fetching recipes', error);
        this.errorMessage = error.message;
      },
      complete: () => console.log('Chiamata API completata')
    }
    );
  }


  goToPage(page: number): void {
    this.pageNumber = page;
    this.loadRecipes();
  }


  onFilterTitle(): void {
    if (this.filterText.trim() === '') {
      this.filteredRecipes = this.availableRecipes;
    } else {
      this.filteredRecipes = this.availableRecipes.filter(recipe =>
        recipe.titolo.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
  }
}
