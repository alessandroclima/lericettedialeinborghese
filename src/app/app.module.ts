import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './features/recipe/add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    RecipeListComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }