export interface GetRecipeListRequest {
    pageNumber: number;
    pageSize: number;
    searchQuery?: string;
    categoryQuery?: string;
}