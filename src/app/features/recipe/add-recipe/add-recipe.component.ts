import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { IngredientQuantity } from '../models/ingredient-quantity.model';
import { IngredientService } from '../services/ingredient.service';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { GetCategoryResponse } from '../models/get-category-response.model';
import { CategoryService } from '../services/category.service';
import { GetDietResponse } from '../models/get-diet-response.model';
import { DietService } from '../services/diet.service';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.css'],
    imports: [FormsModule]
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  private ingredientService = inject(IngredientService);
  private categoryService = inject(CategoryService);
  private dietService = inject(DietService);
  private recipeService = inject(RecipeService);
  private authService = inject(AuthService)
  private router = inject(Router);
  private toastr = inject(ToastrService);

  model: AddRecipeRequest;
  user: User|undefined;
  private addRecipeSubscription?: Subscription;

  availableIngredients: GetIngredientResponse[] = [];
  availableCategories: GetCategoryResponse[] = [];
  availableDiets: GetDietResponse[] = [];

  selectedIngredient: number | undefined = undefined;
  ingredientQuantity: number | null = null;
  ingredientMeasure: string = '';
  imageUrl: string | ArrayBuffer | null = null;

  constructor() {
    this.model = {
      titolo: '',
      descrizione: '',
      tempocottura: null,
      porzioni: 1,
      procedimento: '',
      immagineUrl: '',
      categoriaid: undefined,
      alimentazioneid: undefined,
      EmailAuthor: undefined,
      ingredientiquantita: [],
    };
  }
  ngOnInit(): void {
      this.authService.user().subscribe({
      next: (response) => this.user = response
    });

    this.user = this.authService.getUser();
    if(this.user == undefined){
      //metti un alert che l'utente è sconosciuto

    }
    else{
      this.model.EmailAuthor = this.user.email;
    }
    this.loadAvailableIngredients();
    this.loadAvailableCategories();
    this.loadAvailableDiets();
    console.log(this.availableCategories);
  }

  loadAvailableIngredients(): void {
    this.ingredientService.getIngredients().subscribe(
      (data) => {
        this.availableIngredients = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        console.log(this.availableIngredients);
      },
      (error) => {
        console.error('Error fetching ingredients', error);
      }
    );
  }

  loadAvailableCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.availableCategories = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  loadAvailableDiets(): void {
    this.dietService.getDiets().subscribe(
      (data) => {
        this.availableDiets = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      },
      (error) => {
        console.error('Error fetching categories', error);
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

  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);
    if (form.invalid) {
      console.error('Form is invalid', form.errors);
      return;
    }
    console.log('Form is valid', form.value);
    console.log(this.model);
    this.addRecipeSubscription = this.recipeService
      .addRecipe(this.model)
      .subscribe({
        next: (response) => {
          console.log('Recipe added');
          this.toastr.success('Ricetta aggiunta con successo!', 'Successo'); 
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
