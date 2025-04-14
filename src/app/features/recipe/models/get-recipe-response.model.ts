import { IngredientQuantity } from "./ingredient-quantity.model";

export interface GetRecipeResponse {
    id: string;
    titolo: string;
    descrizione: string;
    tempocottura: number;
    porzioni: number;
    procedimento: string;
    immagineurl: string;
    categoriaid: number;
    ingredientiQuantita: IngredientQuantity[];
}