import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';






const routes: Routes = [{
  path: 'home',
  loadComponent: () => import('./welcome-page/welcome-page.component').then(m => m.WelcomePageComponent)
},
{
  path: 'admin/recipes',
  loadComponent: () => import('./features/recipe/recipe-list/recipe-list.component').then(m => m.RecipeListComponent)
},
{
  path: 'admin/recipes/add',
  loadComponent: () => import('./features/recipe/add-recipe/add-recipe.component').then(m => m.AddRecipeComponent),
  canActivate: [authGuard],
  data:{ roles: ['writer'] }
},
{
  path: 'admin/ingredients',
  loadComponent: () => import('./features/recipe/ingredient-list/ingredient-list.component').then(m => m.IngredientListComponent)
},
{
  path: 'admin/recipes/:id',
  loadComponent: () => import('./features/recipe/recipe-details/recipe-details.component').then(m => m.RecipeDetailsComponent),
  canActivate: [authGuard],
  data:{ roles: ['reader'] }
},
{
  path: 'admin/recipes/update/:author/:id',
  loadComponent: () => import('./features/recipe/update-recipe/update-recipe.component').then(m => m.UpdateRecipeComponent),
  canActivate: [authGuard],
  data:{ roles: ['writer'] }
},
{
  path: 'login',
  loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
},
{
  path: 'reset-password',
  loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
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
