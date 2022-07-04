import {
    CurrentSnake,
    Categories,
    Recipes,
    RecipeDetails
} from './expectedModels/model'

export interface STATE {
    FoodCategory: {
        baseUrl: string,
        loading: boolean,
        currentSnake: CurrentSnake,
        categories: Categories,
        recipes: Recipes,
        recipe_details: RecipeDetails,
    }
}
