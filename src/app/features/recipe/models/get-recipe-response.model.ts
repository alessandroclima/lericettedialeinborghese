import { Timestamp } from "rxjs";
import { IngredientQuantity } from "./ingredient-quantity.model";

export interface GetRecipeResponse {
    id: string;
    titolo: string;
    descrizione: string;
    tempocottura: number;
    porzioni: number;
    procedimento: string;
    immagineurl: string;
    categorianome: string;
    alimentazionenome: string;
    dataCreazione: Date|undefined;
    ingredientiQuantita: IngredientQuantity[];
}