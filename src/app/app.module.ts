import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './features/recipe/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngredientListComponent } from './features/recipe/ingredient-list/ingredient-list.component';
import { RecipeDetailsComponent } from './features/recipe/recipe-details/recipe-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateRecipeComponent } from './features/recipe/update-recipe/update-recipe.component';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps'; // Importa il modulo dello Stepper

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    RecipeListComponent,
    AddRecipeComponent,
    IngredientListComponent,
    RecipeDetailsComponent,
    UpdateRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ButtonModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }