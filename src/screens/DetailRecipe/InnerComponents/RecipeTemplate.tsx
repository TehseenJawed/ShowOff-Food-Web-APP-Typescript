import { RECIPE_DETAILS } from '../../../redux/reducer/FoodSource'
import { useSelector } from 'react-redux'
import YoutubeRender from '../../../components/RenderYoutube'

const RecipeTemplate = ({ children }: any) => {
    const recipeDetails = useSelector(RECIPE_DETAILS);
    const { idMeal, strArea, strCategory, strMealThumb, strMeal, strInstructions, strYoutube, strSource }: any = recipeDetails;
    const videoId = strYoutube?.split('=')[1];
   
    return (
        <div className='template-wrapper'>
            <div className='extend-template-wrapper1'>
                <div className='detail-container-img'>
                    <img src={strMealThumb} alt="" />
                </div>
                <div className='detail-container-1'>
                    <div>Meal:</div>
                    <div>{strMeal}</div>
                </div>
                <div className='detail-container-1'>
                    <div>Recipe id:</div>
                    <div>{idMeal}</div>
                </div>
                <div className='detail-container-1'>
                    <div>Area:</div>
                    <div>{strArea}</div>
                </div>
                <div className='detail-container-1'>
                    <div>Category:</div>
                    <div>{strCategory}</div>
                </div>
            </div>
            <div className='extend-template-wrapper2'>
                <div className='recipe-desc'>
                    <div className='recipe-desc-header'>
                        <div className='desc'>
                          Instructions
                        </div>
                        <div className='youtube'>
                            Watch on Youtube {strSource !== "" ?  (<>or find my blog <a href={strSource} className='blog' target="_blank"> Click Me</a></>) : null} 
                            <YoutubeRender videoId={videoId}/>
                        </div>
                    </div>
                    <div>
                        {strInstructions}
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default RecipeTemplate;