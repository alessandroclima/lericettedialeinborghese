import { Component, Inject, inject } from '@angular/core';
import { GetIngredientResponse } from '../models/get-ingredient-response.model';
import { AddRecipeRequest } from '../models/add-recipe-request.model';
import { IngredientService } from '../services/ingredient.service';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { Subscription } from 'rxjs';
import { UpdateRecipeRequest } from '../models/update-recipe-request.model';
import { CategoryService } from '../services/category.service';
import { FormsModule, NgForm } from '@angular/forms';
import { GetCategoryResponse } from '../models/get-category-response.model';
import { DietService } from '../services/diet.service';
import { GetDietResponse } from '../models/get-diet-response.model';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
  imports: [FormsModule]
})
export class UpdateRecipeComponent {
  private ingredientService = inject(IngredientService);
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private categoryService = inject(CategoryService);
  private dietService = inject(DietService);
  private authService = inject(AuthService)

  removeIngredient(ingredientNome: string) {
    if (ingredientNome) {
      const index = this.model.ingredientiquantita.findIndex(
        (ingredient) => ingredient.ingredienteNome === ingredientNome
      );
      if (index !== -1) {
        this.model?.ingredientiquantita.splice(index, 1);
      }
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.model.immagineUrl = e.target.result.split(',')[1]; // Rimuove il prefisso "data:image/png;base64,"
      };
      reader.readAsDataURL(file);
    } else {
      this.model.immagineUrl = '';
    }
  }
  addIngredient() {
    console.log('Adding ingredient');
    console.log(
      this.availableIngredients.find((x) => x.id == this.selectedIngredient)!
        .name
    );
    if (this.selectedIngredient) {
      this.model?.ingredientiquantita.push({
        ingredienteId: this.selectedIngredient,
        quantita: this.ingredientQuantity,
        ingredienteNome: this.availableIngredients.find(
          (x) => x.id == this.selectedIngredient
        )!.name,
        unitaMisura: this.ingredientMeasure
      });
      this.selectedIngredient = undefined;
      this.ingredientQuantity = null;
      this.ingredientMeasure = '';
    }
  }
  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);
    if (form.invalid) {
      console.error('Form is invalid', form.errors);
      return;
    }
    console.log('Form is valid', form.value);
    if (this.user?.email !== undefined) {
      this.model.EmailAuthor = this.user.email;
    }

    if (this.model) {
      this.updateRecipeSubscription = this.recipeService
        .updateRecipe(this.model)
        .subscribe({
          next: () => {
            console.log('Recipe updated');
            this.router.navigate(['/admin/recipes']);
          },
          // error: (error: HttpErrorResponse) => {
          //   console.error('Error updating recipe', error);
          //   if (error.status === 403) {
          //     alert('Non hai i permessi per modificare questa ricetta.');
          //   } else if (error.status === 404) {
          //     alert('Ricetta non trovata.');
          //   } else if (error.error?.message) {
          //     alert(`Errore: ${error.error.message}`);
          //   } else {
          //     alert('Si è verificato un errore imprevisto.');
          //   }
          // },
        });
    }
  }

  constructor() {
    this.model = {
      id: '',
      titolo: '',
      descrizione: '',
      tempocottura: 0,
      porzioni: 0,
      procedimento: '',
      immagineUrl: '',
      categoriaid: 0,
      alimentazioneid: 0,
      EmailAuthor: '',
      ingredientiquantita: [],
    };
  }

  availableIngredients: GetIngredientResponse[] = [];
  availableCategories: GetCategoryResponse[] = []; // Assuming you have a similar model for categories
  availableDiets: GetDietResponse[] = []; // Assuming you have a similar model for diets
  selectedIngredient: number | undefined = undefined;
  ingredientQuantity: number | null = null;
  ingredientMeasure: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  model: UpdateRecipeRequest; // Assuming you have a similar model for recipes
  getRecipeModel: GetRecipeResponse | undefined = undefined;
  getDetailsSubscription?: Subscription;
  getIngredientsSubscription?: Subscription;
  updateRecipeSubscription?: Subscription;
  recipeId: string | null = null;
  user: User | undefined;

  ngOnInit(): void {
    //recupero il valore dello user dall'auth service
    this.authService.user().subscribe({
      next: (response) => this.user = response

    });
    this.user = this.authService.getUser();
    console.log(this.user?.username)
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.loadIngredients();
      this.loadAvailableCategories();
      this.loadAvailableDiets();
      this.loadRecipe(this.recipeId);
    }
  }

  loadRecipe(id: string): void {
    this.getDetailsSubscription = this.recipeService
      .getRecipeDetails(id)
      .subscribe({
        next: (response) => {
          console.log('Recipe loaded');
          console.log(response);
          this.getRecipeModel = response;
          this.model.id = this.getRecipeModel.id;
          this.model.titolo = this.getRecipeModel.titolo;
          this.model.descrizione = this.getRecipeModel.descrizione;
          this.model.tempocottura = this.getRecipeModel.tempocottura;
          this.model.porzioni = this.getRecipeModel.porzioni;
          this.model.procedimento = this.getRecipeModel.procedimento;
          this.model.immagineUrl = this.getRecipeModel.immagineurl;
          this.model.categoriaid = this.availableCategories.find(
            (x) => x.name == this.getRecipeModel?.categorianome)!.id;
          this.model.alimentazioneid = this.availableDiets.find(
            (x) => x.name == this.getRecipeModel?.alimentazionenome)!.id;
          this.model.ingredientiquantita = this.getRecipeModel?.ingredientiQuantita.map(
            (ingredient) => {
              return {
                ingredienteId: ingredient.ingredienteId,
                quantita: ingredient.quantita,
                ingredienteNome: ingredient.ingredienteNome,
                unitaMisura: ingredient.unitaMisura,
              };
            }
          )!;
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
          this.availableIngredients = response.sort((a, b) =>
            a.name.localeCompare(b.name)
          );;
        },
        error: (error) => {
          console.error('Error loading ingredients', error);
        },
      });
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
}
