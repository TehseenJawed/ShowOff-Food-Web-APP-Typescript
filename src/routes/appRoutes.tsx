import {
    BrowserRouter as Router,
    Routes, 
    Route
} from 'react-router-dom';
import Categories from '../screens/Categories/Categories';
import Recipes from '../screens/Recipes/Recipes';
import DetailRecipe from '../screens/DetailRecipe/DetailRecipe';
import SnakeBar from '../components/Snakebar';
import Header from '../components/Header';


const AppRoutes = () => {
  return (
    <Router>
      <SnakeBar />
      <Header />
      <Routes>
        <Route path='/' element = {<Categories/>} />
        <Route path='/recipes/:category' element = {<Recipes/>} />
        <Route path='/recipes/detail-recipe/:id' element = {<DetailRecipe/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;