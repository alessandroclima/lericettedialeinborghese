import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../features/recipe/services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../features/recipe/models/get-recipe-response.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  imports: [CommonModule, ButtonModule, RouterLink],
})
export class WelcomePageComponent implements OnInit {

  //inietto il servizio per le ricette 
  private recipeService = inject(RecipeService);
  //creo variabile per subscription
  private getRecipeSubscription?: Subscription;
  //creo variabile per le ricette disponibili
  availableRecipes: GetRecipeResponse[] = [];
  groupedSlides: GetRecipeResponse[][] = [];
  private nextStartIndex = 0;
  @ViewChild('carouselTrack', { static: false }) carouselTrack: ElementRef | undefined;
  slides: any[] = [];
  currentGroupIndex = 0;
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.getRecipeSubscription = this.recipeService.getRecipes().subscribe({
      next: (response) => {
        console.log('Ricette disponibili', response);
        //ordino le ricette in base alla data di creazione in modo decrescente
        response.sort((a, b) => new Date(b.datacreazione).getTime() - new Date(a.datacreazione).getTime());
        this.availableRecipes = response.slice(-9); // Prendo le ultime 9 ricette

        //divido le ricette in gruppi di 3
        console.log('slide disponibili', this.slides);
       
        this.groupIntoChunks(this.availableRecipes, 3);;
        
        console.log('gruppi disponibili', this.groupedSlides);

      },
      error: (error) => {
        console.error('Error loading recipes', error);
      }
    });
   
  }

  private groupIntoChunks(arr: GetRecipeResponse[], size: number): void {
    for (let i = 0; i < arr.length; i += size) {
      this.groupedSlides.push(arr.slice(i, i + size));
    }
  }











}
