import { useNavigate } from "react-router-dom";

const CategoryItem = (props: any) => {
    const { value, activeCategory, setActiveCategory } = props.data;
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = value;
    const navigate = useNavigate();
    const updateActiveCategory = (isOver: boolean) => {
        if (isOver) {
            setActiveCategory(idCategory);
        } else {
            setActiveCategory(0);
        }
    };
    
    const moveToRecipes = () => {
        navigate(`/recipes/${strCategory}`);
    }

    return (
        <div className='category-item' onClick={moveToRecipes} onMouseOver={() => updateActiveCategory(true)} onMouseOut={() => updateActiveCategory(false)}>
            <img src={strCategoryThumb} alt="" />
            {
                activeCategory == idCategory ? <div className='category-capitalize'> {strCategory[0]} </div> : null
            }
            <div className="category-title">
                {strCategory}
            </div>
        </div>
    )
}

export default CategoryItem;