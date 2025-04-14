import { IngredientQuantity } from "./ingredient-quantity.model";

export interface AddRecipeRequest {
    titolo: string;
    descrizione: string;
    tempocottura: number | null;
    porzioni: number;
    procedimento: string;
    immagineUrl: string;
    categoriaid: number;
    ingredientiquantita: IngredientQuantity[];
}
