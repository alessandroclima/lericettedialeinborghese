import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../features/recipe/services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../features/recipe/models/get-recipe-response.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  imports: [CommonModule],
})
export class WelcomePageComponent implements OnInit {

  //inietto il servizio per le ricette 
  private recipeService = inject(RecipeService);
  //creo variabile per subscription
  private getRecipeSubscription?: Subscription;
  //creo variabile per le ricette disponibili
  availableRecipes: GetRecipeResponse[] = [];
  groupedSlides: any[][] = [];
  slides: any[] = [];
  currentGroupIndex = 0;

  ngOnInit(): void {
    // Importo tutte le ricette e prendo le ultime 9 inserite
    //TODO: importare direttamente le ultime 9 ricette
    this.getRecipeSubscription = this.recipeService.getRecipes().subscribe({
      next: (response) => {
        console.log('Ricette disponibili', response);
        //ordino le ricette in base alla data di creazione in modo decrescente
        response.sort((a, b) => new Date(b.datacreazione).getTime() - new Date(a.datacreazione).getTime());
        this.availableRecipes = response.slice(-9); // Prendo le ultime 9 ricette
        this.slides = this.availableRecipes.map(recipe => ({
          title: recipe.titolo,
          imageUrl: recipe.immagineurl
        }))
        this.groupSlides();
        console.log('slide disponibili', this.slides);

      },
      error: (error) => {
        console.error('Error loading recipes', error);
      }
    });

  }







  get currentGroup() {
    return this.groupedSlides[this.currentGroupIndex] || [];
  }

  groupSlides() {
    for (let i = 0; i < this.slides.length; i += 3) {
      this.groupedSlides.push(this.slides.slice(i, i + 3));
    }
  }



  get currentTranslate(): number {
    return this.currentGroupIndex * 900;
  }


  nextSlide() {
    if (this.currentGroupIndex < this.groupedSlides.length - 1) {
      this.currentGroupIndex++;
    }
  }

  prevSlide() {
    if (this.currentGroupIndex > 0) {
      this.currentGroupIndex--;
    }
  }


}
