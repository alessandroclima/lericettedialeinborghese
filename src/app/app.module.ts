import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './features/recipe/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IngredientListComponent } from './features/recipe/ingredient-list/ingredient-list.component';
import { RecipeDetailsComponent } from './features/recipe/recipe-details/recipe-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateRecipeComponent } from './features/recipe/update-recipe/update-recipe.component';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps'; // Importa il modulo dello Stepper
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({ declarations: [
        AppComponent,
        WelcomePageComponent,
        NavbarComponent,
        RecipeListComponent,
        AddRecipeComponent,
        IngredientListComponent,
        RecipeDetailsComponent,
        UpdateRecipeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        ButtonModule,
        StepsModule], providers: [provideHttpClient(withInterceptorsFromDi()),   provideAnimationsAsync(),
            providePrimeNG({
                theme: {
                    preset: Aura
                }
            })] })
export class AppModule { }