import { Component, Input } from '@angular/core';
import { GetRecipeResponse } from '../../recipe/models/get-recipe-response.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel-mobile',
  imports: [RouterLink],
  templateUrl: './carousel-mobile.component.html',
  styleUrl: './carousel-mobile.component.css'
})
export class CarouselMobileComponent {

  @Input() availableRecipes: GetRecipeResponse[] = [];
  @Input() carouselId: string = 'carousel'; // Default ID if not provided
}
