import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [RouterLink, FormsModule]
})
export class NavbarComponent {

  searchText: string = ''; // Testo di ricerca

  constructor(private router: Router) {}

  searchRecipes() {
    console.log('Cercando ricette con testo', this.searchText);
    if (this.searchText.trim()) {
      this.router.navigate(['admin/recipes'], { queryParams: { search: this.searchText } });
    }
  }
}
