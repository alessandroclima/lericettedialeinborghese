import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { User } from 'src/app/features/auth/models/user.model';
import { CategoryService } from 'src/app/features/recipe/services/category.service';
import { GetCategoryResponse } from 'src/app/features/recipe/models/get-category-response.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink, FormsModule, ButtonModule],
})
export class NavbarComponent implements OnInit {

  private router = inject(Router);
  private authService = inject(AuthService)
  private categoryService = inject(CategoryService)

  searchText: string = '';
  user?: User;
  availablableCategories: GetCategoryResponse[] = [];

  ngOnInit(): void {

    this.authService.user().subscribe({
      next: (response) => this.user = response
    });

    this.user = this.authService.getUser();
    this.loadCategories();
  }

  constructor() { }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.availablableCategories = response;
        console.log('Categorie disponibili', this.availablableCategories);
      },
      error: (error) => {
        console.error('Error loading categories', error);
      }
    });
  }

  searchRecipesByCategory(searchCategory: string) {
    console.log('Cercando ricette con categoria', searchCategory);

      this.router.navigate(['admin/recipes'], { queryParams: { category: searchCategory } });

  }

  onSearchRecipes() {
    console.log('Cercando ricette con testo', this.searchText);
    if (this.searchText.trim()) {
      this.router.navigate(['admin/recipes'], { queryParams: { search: this.searchText } });
    }
  }


  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
