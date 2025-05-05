import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../features/recipe/services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../features/recipe/models/get-recipe-response.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from "../features/graphics/carousel/carousel.component";
import { CarouselMobileComponent } from "../features/graphics/carousel-mobile/carousel-mobile.component";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  imports: [CommonModule, ButtonModule, CarouselComponent, CarouselMobileComponent],
})
export class WelcomePageComponent implements OnInit {

  //inietto il servizio per le ricette 
  private recipeService = inject(RecipeService);

  //creo variabile per subscription
  private getRecipeSubscription?: Subscription;

  //creo variabile per le ricette disponibili sia in versione desktop che mobile
  groupedSlidesDataOrder: GetRecipeResponse[][] = [];
  groupedSlidesForValutation: GetRecipeResponse[][] = [];
  availableRecipes: GetRecipeResponse[] = [];

  //id dei caroselli
  carouselIdDataOrder: string = 'carouselDataOrder'; // ID del carosello per l'ordinamento per data
  carouselIdValutation: string = 'carouselValutation'; // ID del carosello per l'ordinamento per valutazione
  carouselIdDataOrderMobile: string = 'carouselDataOrderMobile'; // ID del carosello per l'ordinamento per data
  carouselIdValutationMobile: string = 'carouselValutationMobile'; // ID del carosello per l'ordinamento per valutazione

  ngOnInit(): void {
    this.getRecipeSubscription = this.recipeService.getRecipes().subscribe({
      next: (response) => {
        //ordino le ricette in base alla data di creazione in modo decrescente
        const dataorder = response.sort((a, b) => new Date(b.datacreazione).getTime() - new Date(a.datacreazione).getTime());

        // Ordino le ricette in base alla votazione in modo decrescente
        const mostvoted = response.sort((a, b) => b.tempocottura - a.tempocottura); 

        this.availableRecipes = dataorder.slice(-9); // Prendo le ultime 9 ricette
        this.groupIntoChunksForDataOrder(this.availableRecipes, 3);;

        this.availableRecipes = mostvoted.slice(-9); // Prendo le ultime 9 ricette
        this.groupIntoChunksForValutation(this.availableRecipes, 3);

      },
      error: (error) => {
        console.error('Error loading recipes', error);
      }
    });
   
  }

  //funzione che cicla l'array a gruppi di size e lo push in un array di array
  private groupIntoChunksForDataOrder(arr: GetRecipeResponse[], size: number): void {
    for (let i = 0; i < arr.length; i += size) {
      this.groupedSlidesDataOrder.push(arr.slice(i, i + size));
    }
  }

    //funzione che cicla l'array a gruppi di size e lo push in un array di array
    private groupIntoChunksForValutation(arr: GetRecipeResponse[], size: number): void {
      for (let i = 0; i < arr.length; i += size) {
        this.groupedSlidesForValutation.push(arr.slice(i, i + size));
      }
    }











}
