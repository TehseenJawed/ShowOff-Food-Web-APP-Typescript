import { RECIPE_DETAILS } from '../../../redux/reducer/FoodSource';
import { useSelector } from 'react-redux';

const Ingredients = () => {
    const recipeDetails = useSelector(RECIPE_DETAILS);
    const { strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4, strIngredient5, strMeasure5,
        strIngredient6, strMeasure6, strIngredient7, strMeasure7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10,
        strIngredient11, strMeasure11, strIngredient12, strMeasure12, strIngredient13, strMeasure13, strIngredient14, strMeasure14, strIngredient15, strMeasure15,
        strIngredient16, strMeasure16, strIngredient17, strMeasure17, strIngredient18, strMeasure18, strIngredient19, strMeasure19, strIngredient20, strMeasure20, }: any = recipeDetails;
    const newArray = [
        { strIngredient: strIngredient1, strMeasure: strMeasure1 },
        { strIngredient: strIngredient2, strMeasure: strMeasure2 },
        { strIngredient: strIngredient3, strMeasure: strMeasure3 },
        { strIngredient: strIngredient4, strMeasure: strMeasure4 },
        { strIngredient: strIngredient5, strMeasure: strMeasure5 },
        { strIngredient: strIngredient6, strMeasure: strMeasure6 },
        { strIngredient: strIngredient7, strMeasure: strMeasure7 },
        { strIngredient: strIngredient8, strMeasure: strMeasure8 },
        { strIngredient: strIngredient9, strMeasure: strMeasure9 },
        { strIngredient: strIngredient10, strMeasure:strMeasure10 },
        { strIngredient: strIngredient11, strMeasure:strMeasure11 },
        { strIngredient: strIngredient12, strMeasure:strMeasure12 },
        { strIngredient: strIngredient13, strMeasure:strMeasure13 },
        { strIngredient: strIngredient14, strMeasure:strMeasure14 },
        { strIngredient: strIngredient15, strMeasure:strMeasure15 },
        { strIngredient: strIngredient16, strMeasure:strMeasure16 },
        { strIngredient: strIngredient17, strMeasure:strMeasure17 },
        { strIngredient: strIngredient18, strMeasure:strMeasure18 },
        { strIngredient: strIngredient19, strMeasure:strMeasure19 },
        { strIngredient: strIngredient20, strMeasure:strMeasure20 },
    ];
    
    return (
        <div className='recipe-ingredient-container'>
            <div className='recipe-table'>
                <div className='table-header'>
                    Ingredient
                </div>
                <div className='table-header'>
                    Measurement
                </div>
            </div>
            {
                newArray.map((v, i) => (
                    <>
                        {
                            v?.strIngredient !== "" && v?.strIngredient ? (
                                <div className='recipe-table'>
                                    <div className='table-desc pink-text'>
                                        {v?.strIngredient}
                                    </div>
                                    <div className='table-desc'>
                                        {v?.strMeasure}
                                    </div>
                                </div>
                            ) : null
                        }
                    </>
                ))

            }

        </div>
    )
}

export default Ingredients