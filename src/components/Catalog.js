import './Landing.css';
import Movie from './Movie';

const Catalog = ({  user,plusClick,removeClick}) => {
 
    
  return (
    <div>
      <h2>Welcome {user.name}!</h2>
      <h3>Budget: {user.budget}</h3>

       <Movie moviesData = {user.catalogMovies} user = {user} plusClick={plusClick} removeClick={removeClick} />
    </div>
    
   
  );
}

export default Catalog;
