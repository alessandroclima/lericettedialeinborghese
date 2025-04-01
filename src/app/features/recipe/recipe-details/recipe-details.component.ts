import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { IngredientQuantity } from '../models/ingredient-quantity.model';
import { StepperModule } from 'primeng/stepper';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css'],
    imports: [RouterLink, FormsModule, StepperModule, ButtonModule, AccordionModule]
})
export class RecipeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);
  private router = inject(Router);


  onEnterPressed(): void {
    if (this.recipe()?.ingredientiQuantita) {
      // Aggiorna solo gli ingredienti modificabili
      const nuoviIngredienti = this.ingredientiQuantita().map((element) => {
        if (element.quantita != null && element.quantita > 0) {
          return {
            ...element,
            quantita: (element.quantita / this.recipe()?.porzioni!) * this.numero
          };
        }
        return element;
      });

      // Aggiorna il Signal degli ingredienti modificabili
      this.ingredientiModificati.set(nuoviIngredienti);
    }
  }
   // Inizializza il Signal con un oggetto vuoto di tipo GetRecipeResponse
   recipe = signal<GetRecipeResponse|undefined>(undefined);

   // Variabile per gli ingredienti modificabili
   ingredientiModificati = signal<IngredientQuantity[]>([]);

  // Computed per gli ingredienti originali
  ingredientiQuantita = computed(() => {
    return this.recipe()?.ingredientiQuantita.map(ing => ({ ...ing })) ?? [];
  });

  // Computed per il numero di porzioni
  numero: number = 0;

  getDetailsSubscription?: Subscription;
  recipeId: string | null = null;


  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {


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
          //setta il signal recipe tramite il metodo set
          this.recipe.set(response); 
          //inserisco console log nel next perchè è qui che l'oggetto viene valorizzato
          console.log(this.recipe());
          this.numero = response.porzioni;
          this.ingredientiModificati.set(response.ingredientiQuantita)
          console.log(this.ingredientiModificati())
        },
        error: (error) => {
          console.error('Error loading recipe', error);
        }
      }
    );
  }
}
