import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgClass } from '@angular/common';
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, NgClass, RouterOutlet, WelcomePageComponent]
})
export class AppComponent {
  private router = inject(Router);
  private toastr = inject(ToastrService)
  title = 'tocookistolivefe';

  isHomePage: boolean = false;
  isWelcomePage: boolean = false;

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = ['/', 'login', '/register'].some(path => event.url.endsWith(path));
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isWelcomePage = ['/'].some(path => event.url.endsWith(path));
      }
    });
  }


}

