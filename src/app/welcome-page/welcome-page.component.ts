import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../features/recipe/services/recipe.service';
import { Subscription } from 'rxjs';
import { GetRecipeResponse } from '../features/recipe/models/get-recipe-response.model';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  imports: [CommonModule,Carousel, ButtonModule],
})
export class WelcomePageComponent implements OnInit {

  //inietto il servizio per le ricette 
  private recipeService = inject(RecipeService);
  //creo variabile per subscription
  private getRecipeSubscription?: Subscription;
  //creo variabile per le ricette disponibili
  availableRecipes: GetRecipeResponse[] = [];
  groupedSlides: any[][] = [];
  private nextStartIndex = 0;
  @ViewChild('carouselTrack', { static: false }) carouselTrack: ElementRef | undefined;
  slides: any[] = [];
  currentGroupIndex = 0;
  responsiveOptions: any[] | undefined;

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
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

  get currentGroup() {
    return this.groupedSlides[this.currentGroupIndex] || [];
  }

  private getNextGroup(startIndex: number): any[] {
    const group: any[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % this.slides.length; // ciclico
      group.push(this.slides[index]);
    }
    return group;
  }


  groupSlides() {
    this.groupedSlides = [];
    for (let i = 0; i < this.slides.length; i += 3) {
      this.groupedSlides.push(this.slides.slice(i, i + 3));
    }
    this.nextStartIndex = this.groupedSlides.length * 3 % this.slides.length;
  }



  get currentTranslate(): number {
    return this.currentGroupIndex * 900;
  }


  nextSlide() {
    const isPenultimate = this.currentGroupIndex === this.groupedSlides.length - 2;

    if (isPenultimate) {
      const newGroup = this.getNextGroup(this.nextStartIndex);
      this.groupedSlides.push(newGroup);
      this.nextStartIndex = (this.nextStartIndex + 3) % this.slides.length;
    }

    // Scorri in ogni caso
    if (this.currentGroupIndex < this.groupedSlides.length - 1) {
      this.currentGroupIndex++;
    }

    this.triggerReflow();
  }

  prevSlide() {
    const isAtFirstGroup = this.currentGroupIndex === 0;

    if (isAtFirstGroup) {
      // Precarica il gruppo precedente
      const startIndex = (this.nextStartIndex - 6 + this.slides.length) % this.slides.length;
      const newGroup = this.getNextGroup(startIndex);

      // Aggiungi il gruppo in testa
      this.groupedSlides.unshift(newGroup);

      // Imposta il gruppo visibile su quello appena aggiunto
      this.currentGroupIndex = 1;

      // Aggiorna l'indice per il prossimo gruppo
      this.nextStartIndex = (this.nextStartIndex - 3 + this.slides.length) % this.slides.length;

      // Forza un reflow per attivare la transizione
      this.triggerReflow();

      // Cambia la posizione per far scorrere verso sinistra
      setTimeout(() => {
        this.currentGroupIndex--;
      }, 50);
    } else {
      // Altrimenti, spostati normalmente
      this.currentGroupIndex--;
    }

    // Forza un reflow per attivare la transizione
    this.triggerReflow();
  }

  // Funzione per attivare il reflow forzato
  triggerReflow() {
    if (this.carouselTrack) {
      // Forza il browser a fare un reflow
      this.carouselTrack.nativeElement.offsetHeight;
    }
  }








}
