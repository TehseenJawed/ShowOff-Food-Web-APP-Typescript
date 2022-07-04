import axios from 'axios';
import {STATE} from '../../typeCasting/typeCasting'
import {
  CATEGORY_API,
  RECPIE_FILTER,
  RECIPE_BY_ID
} from '../api/apis'

export const Loading = (load: boolean) => {
  return {
    type: "Loading",
    load,
  };
};

export const SetCategory = (load: boolean) => {
  return {
    type: "SetCategory",
    load,
  };
};

export const SetRecipes = (load: boolean) => {
  return {
    type: "SetRecipes",
    load,
  };
};

export const SetRecipeDetails = (load: object) => {
  return {
    type: "SetRecipeDetails",
    load,
  };
};

export const GetCategories = () => {
  return async (dispatch: any, state: STATE) => {
    try {
      dispatch(Loading(true))
      const response = await axios.get(`${CATEGORY_API}`)
      dispatch(SetCategory(response?.data?.categories))
      dispatch(Loading(false))
    }
    catch (err) {
      dispatch(Loading(false))
    }
  }
};

export const GetRecipeByCategory = (category: string) => {
  return async (dispatch: any, state: STATE) => {
    try {
      dispatch(Loading(true))
      const response = await axios.get(`${RECPIE_FILTER}?c=${category}`)
      dispatch(SetRecipes(response?.data?.meals))
      dispatch(Loading(false))
    }
    catch (err) {
      dispatch(Loading(false))
    }
  }
};

export const GetRecipeById = (id: string) => {
  return async (dispatch: any, state: STATE) => {
    try {
      dispatch(Loading(true))
      const response = await axios.get(`${RECIPE_BY_ID}?i=${id}`)
      dispatch(SetRecipeDetails(response?.data?.meals[0]))
      dispatch(Loading(false))
    }
    catch (err) {
      dispatch(Loading(false))
    }
  }
};