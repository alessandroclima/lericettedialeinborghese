import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [RouterLink, FormsModule]
})
export class NavbarComponent {
  private router = inject(Router);


  searchText: string = '';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]); // Testo di ricerca

  constructor() {}

  searchRecipes() {
    console.log('Cercando ricette con testo', this.searchText);
    if (this.searchText.trim()) {
      this.router.navigate(['admin/recipes'], { queryParams: { search: this.searchText } });
    }
  }
}
