import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, NgClass, RouterOutlet]
})
export class AppComponent {
  private router = inject(Router);

  title = 'tocookistolivefe';

  isHomePage: boolean = false;

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = ['/', 'login', '/register'].some(path => event.url.endsWith(path));
      }
    });
  }
}
