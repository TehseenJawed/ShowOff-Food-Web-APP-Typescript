
const CategoryContainer = ({children}:any) => {
    return(
        <div className='category-container'>
            <div className='category-header'>
                FOOD CATEGORY
            </div>
            <div className='category-items'>
                {children}
            </div>
        </div>
    )
}

export default CategoryContainer;