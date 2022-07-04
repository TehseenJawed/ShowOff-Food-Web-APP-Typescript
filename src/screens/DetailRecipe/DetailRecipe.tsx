import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { GetRecipeById } from '../../redux/action/FoodSource';
import { useDispatch } from 'react-redux';
import { RecipeTemplate, Ingredients } from './InnerComponents';

const DetailRecipe = () => {
    const params = useParams();
    const dispatch = useDispatch<any>();
    const { pathname } = useLocation();
    const id = params.id;
    useEffect(() => {
        if (typeof id !== 'undefined') {
            dispatch(GetRecipeById(id));
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <RecipeTemplate>
                <Ingredients />
            </RecipeTemplate>
        </div>
    )
}

export default DetailRecipe