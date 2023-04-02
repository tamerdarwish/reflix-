import { Link } from 'react-router-dom';
import './Components.css';

const RentedMovie = ({ moviesData, user, filteredResultsByInput, removeClick }) => {
    let rentedMovies = moviesData.filter(movie => movie.isRented)
    let rentedFilterResults = filteredResultsByInput.filter(movie => movie.isRented)

    return (
        <div className='rented-container'>
            {filteredResultsByInput.length === 0 ?
                <div className='rented-movies'>
                    <h2>Rented Movies:</h2>
                    {rentedMovies.map(movie =>
                        <div className='rented-movie'>
                            <div onClick={() => removeClick(movie.id, user.id)}>➖</div>
                            <Link to={`/movies/${movie.id}`}><img src={movie.img}></img><h2>{movie.title}</h2></Link>
                        </div>)}
                </div>
                : <div>
                     <h2>Rented Movies:</h2>  
                     {rentedFilterResults.map(movie => 
                     <div className='rented-movie'> 
                     <div onClick={() => removeClick(movie.id, user.id)}>➖</div>  
                     <Link to={`/movies/${movie.id}`}><img src={movie.img}></img><h2>{movie.title}</h2></Link></div>)}
                      </div>
            }


        </div>


    );
}
export default RentedMovie