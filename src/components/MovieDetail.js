
import './Landing.css';

const MoviesDetail = ({ movie }) => {

  return (
    <div className = 'movie-detail'>
        <div className='movie-title'>{movie.title}({movie.year})</div>
        <img src = {movie.img}/>
        <p>{movie.descrShort}</p> 


    </div>
    
 
  );
}

export default MoviesDetail;
