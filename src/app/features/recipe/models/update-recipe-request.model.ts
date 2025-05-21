import { IngredientQuantity } from './ingredient-quantity.model';

export interface UpdateRecipeRequest {
  id: string;
  titolo: string;
  descrizione: string;
  tempocottura: number;
  porzioni: number;
  procedimento: string;
  immagineUrl: string;
  categoriaid: number;
  alimentazioneid: number;
  EmailAuthor: string;
  ingredientiquantita: IngredientQuantity[];
}
