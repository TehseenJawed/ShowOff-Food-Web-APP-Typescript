import { useNavigate } from "react-router-dom"

const RecipeItem = (props: any) => {
    const { value, index, activeRecipe, setActiveRecipe } = props.data
    const { strMeal, strMealThumb, idMeal } = value
    const navigate = useNavigate()
    const updateActiveRecipe = (isOver: boolean) => {
        if (isOver) {
            setActiveRecipe(index)
        } else {
            setActiveRecipe(-1)
        }
    }
    const checkRecipe = () => {
        navigate(`/recipes/detail-recipe/${idMeal}`);
    }

    return (
        <>
            {
                index % 2 == 0 ? (
                    <div className="recipe-container-item1" onClick={checkRecipe} onMouseOver={() => updateActiveRecipe(true)} onMouseOut={() => updateActiveRecipe(false)} >
                        <img className={activeRecipe == index ? "img-active" : ""} src={strMealThumb} alt="" />
                        <div className="recipe-item1-text">
                            {strMeal}
                        </div>
                        <div className="recipe-id">Recipe: {idMeal}</div>
                    </div>
                ) : (
                    <div className="recipe-container-item2" onClick={checkRecipe} onMouseOver={() => updateActiveRecipe(true)} onMouseOut={() => updateActiveRecipe(false)} >
                        <img className={activeRecipe == index ? "img-active" : ""} src={strMealThumb} alt="" />
                        <div className="recipe-item1-text">
                            {strMeal}
                        </div>
                        <div className="recipe-id">Recipe: {idMeal}</div>
                    </div>
                )
            }
        </>
    )
}

export default RecipeItem