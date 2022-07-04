import thunk from 'redux-thunk';
import FoodCategory from './reducer/FoodSource'
import { createStore, applyMiddleware, combineReducers } from 'redux'

export default createStore(combineReducers({
  FoodCategory,
  }), applyMiddleware(thunk))