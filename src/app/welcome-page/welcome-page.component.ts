import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../features/recipe/services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../features/recipe/models/get-recipe-response.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from "../features/graphics/carousel/carousel.component";
import { CarouselMobileComponent } from "../features/graphics/carousel-mobile/carousel-mobile.component";
import { GetRecipeListRequest } from '../features/recipe/models/get-recipe-list-request.modest';

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
  private getRecipeSortByDateSubscription?: Subscription;
  private getRecipeSortByVoteSubscription?: Subscription;

  //creo variabile per le ricette disponibili sia in versione desktop che mobile
  groupedSlidesDataOrder: GetRecipeResponse[][] = [];
  groupedSlidesForValutation: GetRecipeResponse[][] = [];
  availableRecipesSortedByDate: GetRecipeResponse[] = [];
  availableRecipesSortedByVote: GetRecipeResponse[] = [];
  pagination: GetRecipeListRequest = {
    pageNumber: 1,
    pageSize: 9,
    searchQuery: '',
    categoryQuery: ''
  };

  //id dei caroselli
  carouselIdDataOrder: string = 'carouselDataOrder'; // ID del carosello per l'ordinamento per data
  carouselIdValutation: string = 'carouselValutation'; // ID del carosello per l'ordinamento per valutazione
  carouselIdDataOrderMobile: string = 'carouselDataOrderMobile'; // ID del carosello per l'ordinamento per data
  carouselIdValutationMobile: string = 'carouselValutationMobile'; // ID del carosello per l'ordinamento per valutazione

  ngOnInit(): void {
    this.getRecipeSortByDateSubscription = this.recipeService.getRecipes(undefined, undefined, "Dataultimamodifica", "desc").subscribe({
      next: (response) => {

        this.availableRecipesSortedByDate = response
        this.groupIntoChunksForDataOrder(this.availableRecipesSortedByDate, 3);;

      },
      error: (error) => {
        console.error('Error loading recipes', error);
      }
    });
    this.getRecipeSortByVoteSubscription = this.recipeService.getRecipes(undefined, undefined, "Voti", "desc").subscribe({
      next: (response) => {

        this.availableRecipesSortedByVote = response
        this.groupIntoChunksForValutation(this.availableRecipesSortedByVote, 3);;

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
