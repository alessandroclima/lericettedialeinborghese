import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { GetRecipeResponse } from '../models/get-recipe-response.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { IngredientQuantity } from '../models/ingredient-quantity.model';
import { StepperModule } from 'primeng/stepper';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRecipeDetailResponse } from '../models/get-recipe-detail-response.model';
import { User } from '../../auth/models/user.model';
import { AuthService } from '../../auth/services/auth.service';
import { RecipeUser } from '../models/recipe-user.model';
import { RatingModule } from 'ngx-bootstrap/rating';

register();
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  imports: [FormsModule, StepperModule, CommonModule, RatingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecipeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private authService = inject(AuthService);

  isCollapseOpenOne = false;
  isCollapseOpenTwo = false;
  isCollapseOpenThree = false;
  showInput = false;
  commented = false;
  commentText = '';
  valutationNumber = 0.5;
  valutazioneMedia = 0.5;

  submitComment(newComment: string, newValutation: number): void {
    console.log('Commento inviato:', this.commentText);
    this.recipeService.voteRecipe({
      recipeid: this.recipeId!,
      email: this.user?.email!,
      valutazione: newValutation,
      commento: newComment
    }).subscribe({
      next: (response) => {
        console.log('Commento inviato con successo', response);
        this.commented = true;
        this.showInput = false;
        this.loadRecipe(this.recipeId!);
      },
      error: (error) => {
        console.error('Errore durante l\'invio del commento', error);
      }
    });
  }

  comeback(){
    this.showInput = false;
  }


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
  recipe = signal<GetRecipeDetailResponse | undefined>(undefined);

  // Variabile per gli ingredienti modificabili
  ingredientiModificati = signal<IngredientQuantity[]>([]);

  // Variabile per i commenti
  recipeUser = signal<RecipeUser[]>([]);

  // Computed per gli ingredienti originali
  ingredientiQuantita = computed(() => {
    return this.recipe()?.ingredientiQuantita.map(ing => ({ ...ing })) ?? [];
  });

  // Computed per il numero di porzioni
  numero: number = 0;

  getDetailsSubscription?: Subscription;
  recipeId: string | null = null;
  relatedRecipes: GetRecipeResponse[] = [];
  responsiveOptions: any[] | undefined;
  user?: User;


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

  calcolaMedia(){
    const media = this.recipeUser().reduce((acc, curr) => acc + curr.valutazione, 0) / this.recipeUser().length;
    this.valutazioneMedia = Math.ceil(media*100)/100;
  }

  loadRecipe(id: string): void {
    this.getDetailsSubscription = this.recipeService.getRecipeDetails(id).subscribe({
      next: (response) => {
        // setta il signal recipe tramite il metodo set
        this.recipe.set(response);
        this.loadRelatedRecipes(this.recipe()!.categorianome);
        this.numero = response.porzioni;
        this.ingredientiModificati.set(response.ingredientiQuantita);
        this.recipeUser.set(response.recipeUser);
        this.calcolaMedia();
        this.user = this.authService.getUser();
        if (this.user && this.recipeUser().find(x => x.email == this.user!.email)) {
          this.commented = true;
          console.log(this.commented);
        }
      },
      error: (error) => {
        console.error('Error loading recipe', error);
      }
    });
  }
  

  loadRelatedRecipes(categorianome: string): void {
    this.recipeService.getRelatedRecipes(categorianome).subscribe(
      {
        next: (response) => {
          this.relatedRecipes = response;
          console.log('Ricette correlate', this.relatedRecipes);
        },
        error: (error) => {
          console.error('Error loading related recipes', error);
        }
      }
    );
  }

}
