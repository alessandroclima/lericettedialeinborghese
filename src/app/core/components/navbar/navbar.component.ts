import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink, FormsModule]
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService)

  searchText: string = '';

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (response) => console.log(response)
    });
  }

  constructor() { }

  searchRecipes() {
    console.log('Cercando ricette con testo', this.searchText);
    if (this.searchText.trim()) {
      this.router.navigate(['admin/recipes'], { queryParams: { search: this.searchText } });
    }
  }
}
