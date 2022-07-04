import React, {useState, useEffect} from 'react';
import { GetCategories } from '../../redux/action/FoodSource';
import { CATEGORIES } from '../../redux/reducer/FoodSource';
import { useSelector, useDispatch } from 'react-redux';
import {CategoryContainer, CategoryItem} from './InnerComponents';
import { useLocation } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch<any>();
  const { pathname } = useLocation();
  const categories:any = useSelector(CATEGORIES) ;
  const [activeCategory, setActiveCategory] = useState<number>(0);
  
  useEffect(() => {
    dispatch(GetCategories());
  },[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='category-wrapper'>
      <CategoryContainer>
        {
          categories?.map((v:any,i:number) => <CategoryItem data={{index:i, value:v, activeCategory, setActiveCategory}}/>)
        }
      </CategoryContainer>
    </div>
  )
}

export default Categories;