import './Components.css';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const Catalog = ({  user,plusClick,removeClick}) => {
 
  return (
    <div>
      <Link to={'/catalog/'+user.id}> <div className='catalog' > Catalog</div></Link>
    <div className='catalog-container'>
      <h2>Welcome {user.name}!</h2>
      <h3>Budget: {user.budget}</h3>

       <Movie moviesData = {user.catalogMovies} user = {user} plusClick={plusClick} removeClick={removeClick} />
    </div>
    
   </div>
  );
}

export default Catalog;
