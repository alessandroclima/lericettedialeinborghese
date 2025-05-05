import { Component, Input } from '@angular/core';
import { GetRecipeResponse } from '../../recipe/models/get-recipe-response.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  @Input() groupedSlides: GetRecipeResponse[][] = [];
  @Input() carouselId: string = 'carousel'; // Default ID if not provided
}
