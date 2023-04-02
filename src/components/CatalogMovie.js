
import { Link } from 'react-router-dom';
import './Components.css';


const CatalogMovie = ({ moviesData, user, filteredResultsByInput, plusClick, removeClick }) => {
    let rentedMovies = moviesData.filter(movie => movie.isRented)

    return (
        <div className='catalog-container'>
            <h2>Catalog:</h2>
            {filteredResultsByInput.length === 0 ?
                <div className='catalg-movies'>

                    {moviesData.map(movie => movie.isRented ?
                        <div className='rented-movie'>
                            <div onClick={() => removeClick(movie.id, user.id)}>➖</div>
                            <Link to={`/movies/${movie.id}`}>
                                <img src={movie.img} />
                            </Link>
                            <h2>{movie.title}</h2>
                        </div>
                        : <div className='not-rented-movie'>
                            <div onClick={() => plusClick(movie.id, user.id)}>➕</div>
                            <Link to={`/movies/${movie.id}`}>
                                <img src={movie.img}></img>
                            </Link>
                            <h2>{movie.title}</h2>
                        </div>
                    )}

                </div>

                : filteredResultsByInput.map(movie => movie.isRented ?
                    <div className='rented-movie'>
                        <div>➖</div>
                        <Link to={`/movies/${movie.id}`}>
                            <img src={movie.img}></img>
                        </Link>
                        <h2>{movie.title}</h2>
                    </div>
                    : <div className='not-rented-movie'>
                        <div onClick={() => plusClick(movie.id, user.id)}>➕</div>
                        <Link to={`/movies/${movie.id}`}>
                            <img src={movie.img} />
                        </Link><h2>{movie.title}</h2>
                    </div>
                )
            }


        </div>


    );
}

export default CatalogMovie