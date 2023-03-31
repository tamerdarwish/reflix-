import './Landing.css';
import Movie from './Movie';

const Catalog = ({ moviesData , user }) => {
 
    
  return (
    <div>
      <h3>Budget: {user.budget}</h3>

       <Movie moviesData = {moviesData}/>
    </div>
    
   
  );
}

export default Catalog;
