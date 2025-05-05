import { Component, Input } from '@angular/core';
import { GetRecipeResponse } from '../../recipe/models/get-recipe-response.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  /**
   *
   */
  constructor(private router: Router) {
    // Constructor logic can be added here if needed
    
  }

  @Input() groupedSlides: GetRecipeResponse[][] = [];
  @Input() carouselId: string = 'carousel'; // Default ID if not provided

  vaiADettaglio(id: string) {
    this.router.navigate(['/admin/recipes', id]);
  }
  debug(event: Event) {
    console.log('click su immagine', event);
  }
}
