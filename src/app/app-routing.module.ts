import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';






const routes: Routes = [{
  path: 'admin/recipes',
  loadComponent: () => import('./features/recipe/recipe-list/recipe-list.component').then(m => m.RecipeListComponent)
},
{
  path: 'admin/recipes/add',
  loadComponent: () => import('./features/recipe/add-recipe/add-recipe.component').then(m => m.AddRecipeComponent),
  canActivate: [authGuard]
},
{
  path: 'admin/ingredients',
  loadComponent: () => import('./features/recipe/ingredient-list/ingredient-list.component').then(m => m.IngredientListComponent)
},
{
  path: 'admin/recipes/:id',
  loadComponent: () => import('./features/recipe/recipe-details/recipe-details.component').then(m => m.RecipeDetailsComponent)
},
{
  path: 'admin/recipes/update/:id',
  loadComponent: () => import('./features/recipe/update-recipe/update-recipe.component').then(m => m.UpdateRecipeComponent)
},
{
  path: 'login',
  loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
},
{
  path: 'register',
  loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
