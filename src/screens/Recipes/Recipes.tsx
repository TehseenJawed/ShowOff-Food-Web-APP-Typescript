import React, {useState, useEffect } from 'react';
import { GetRecipeByCategory } from '../../redux/action/FoodSource';
import {RECIPES} from '../../redux/reducer/FoodSource';
import { RecipeList, RecipeItem } from './InnerComponents';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

const Recipes = () => {
    const dispatch = useDispatch<any>();
    const {pathname} = useLocation();
    const params:any = useParams()
    const [activeRecipe, setActiveRecipe] = useState(-1);
    const recipes:any = useSelector(RECIPES);
    
    useEffect(() => {
        dispatch(GetRecipeByCategory(params.category));
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    return (
        <div className='recipe-wrapper'>
            <RecipeList>
                {
                    typeof recipes !== 'undefined'? (
                        recipes?.map((value:object,index:number) => <RecipeItem data={{value, index, activeRecipe, setActiveRecipe}} />)
                    ):null
                }
            </RecipeList>
        </div>
    )
}

export default Recipes