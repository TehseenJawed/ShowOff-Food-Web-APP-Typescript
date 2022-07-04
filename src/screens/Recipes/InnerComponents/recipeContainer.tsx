import { useSelector } from 'react-redux';
import { LOADING } from '../../../redux/reducer/FoodSource';
import CircularProgress from '@mui/material/CircularProgress';


const RecipeContainer = ({children}:any) => {
  const loading:boolean = useSelector(LOADING)
  
  return (
    <div className='recipe-innerpaper'>
        <div className='recipe-header'>RECIPES</div>
        <div className='recipe-lists'>
            {
              loading ? <CircularProgress color={'secondary'}/> : children
            }
        </div>
    </div>
  )
}

export default RecipeContainer;