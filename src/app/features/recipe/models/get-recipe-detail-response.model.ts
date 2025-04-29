import { e } from "@angular/core/navigation_types.d-u4EOrrdZ";
import { GetRecipeResponse } from "./get-recipe-response.model";
import { RecipeUser } from "./recipe-user.model";

export interface GetRecipeDetailResponse extends GetRecipeResponse {
    recipeUser: RecipeUser[];
}
