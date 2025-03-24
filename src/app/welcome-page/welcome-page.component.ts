import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css'],
    standalone: false
})
export class WelcomePageComponent {
  onExploreRecipes() {
    console.log('L\'utente vuole esplorare le ricette!');
    // Qui puoi aggiungere la logica per navigare a un'altra pagina o mostrare altre informazioni
  }
}
