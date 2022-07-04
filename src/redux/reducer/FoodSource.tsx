import { STATE } from '../../typeCasting/typeCasting'
const initialState = {
    baseUrl: "http://192.168.0.186:3001/",
    loading: false,
    categories: [],
    recipes: [],
    recipe_details:{},
    currentSnake: {
        vertical:'top', 
        horizontal:'center', 
        open: false
    },
}


// API Selector
export const BASE_URL = (state: STATE) => state.FoodCategory.baseUrl
export const LOADING = (state: STATE) => state.FoodCategory.loading
export const CURRENTSNAKE = (state: STATE) => state.FoodCategory.currentSnake
export const CATEGORIES = (state: STATE) => state.FoodCategory.categories
export const RECIPES = (state: STATE) => state.FoodCategory.recipes
export const RECIPE_DETAILS = (state: STATE) => state.FoodCategory.recipe_details

export default function AuthReducer(state = initialState, action: any) {
    switch (action.type) {
        case "Loading":
            return {
                ...state,
                loading:action.load
            }
        case "SetCategory":
            return {
                ...state,
                categories:action.load
            }
        case "SetRecipes":
            return {
                ...state,
                recipes:action.load
            }
        case "SetRecipeDetails":
            return {
                ...state,
                recipe_details:action.load
            }
    }


    return state;
}