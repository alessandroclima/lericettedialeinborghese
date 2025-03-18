import { IngredientQuantity } from "./ingredient-quantity.model";

export interface AddRecipeRequest {
    titolo: string;
    descrizione: string;
    tempocottura: number;
    porzioni: number;
    procedimento: string;
    immagineUrl: string;
    ingredientiquantita: IngredientQuantity[];
}
