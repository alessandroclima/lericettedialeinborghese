import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './features/recipe/add-recipe/add-recipe.component';

const routes: Routes = [{
  path: 'admin/recipes',
  component: RecipeListComponent
},
{
  path: 'admin/recipes/add',
  component: AddRecipeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
