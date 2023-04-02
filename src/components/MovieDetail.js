import './Components.css';

const MoviesDetail = ({ movie }) => {

  return (
    <div>
    <div className = 'movie-detail'>
        <div id='movie-title'>{movie.title}({movie.year})</div>
        <img src = {movie.img}/>
        <p>{movie.descrShort}</p> 

    </div>
    
 </div>
  );
}

export default MoviesDetail;
