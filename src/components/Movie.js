import './Landing.css';
import {  Link } from 'react-router-dom';

const movie = ({ moviesData }) => {
    let rentedMovies = moviesData.filter(movie => movie.isRented)




    return (

        <div>
            <input placeholder = 'Search' />
            <div className='movies-container'>
                {rentedMovies.length != 0 ?
                    <div className='rented-movies'>
                        Rented Movies:
                        {rentedMovies.map(movie => <div className='rented-movie'> <button>-</button>  <Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link></div>)}
                    </div>
                    : <div></div>}

                <div className='catalg-movies'>
                    Catalog:
                    {moviesData.map(movie => movie.isRented ?
                        <div className='rented-movie'> <button>-</button><Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link></div>
                        : <div className='not-rented-movie'>  <button>+</button> <Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link></div>
                    )}
                </div>



            </div>
        </div>
    );
}

export default movie;
