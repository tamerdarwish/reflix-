import './Landing.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const RentedMovie = ({ moviesData,user, filteredResultsByInput,removeClick }) => {
    let rentedMovies = moviesData.filter(movie => movie.isRented)
    let rentedFilterResults = filteredResultsByInput.filter(movie => movie.isRented)

    return (
        <div className='rented-container'>
            {filteredResultsByInput.length === 0 ?
                <div className='rented-movies'>
                    <h2>Rented Movies:</h2>
                    {rentedMovies.map(movie => <div className='rented-movie'> <div  onClick={() => removeClick(movie.id,user.id)}>➖</div>  <Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link></div>)}
                </div>
                : <div>  {rentedFilterResults.map(movie => <div className='rented-movie'> <button onClick={() => removeClick(movie.id,user.id)}>➖</button>  <Link to={`/movies/${movie.id}`}><img src={movie.img}></img><h2>{movie.title}</h2></Link></div>)} </div>
            }


        </div>


    );
}

const CatalogMovie = ({ moviesData, user, filteredResultsByInput,plusClick, removeClick}) => {
    let rentedMovies = moviesData.filter(movie => movie.isRented)
 
    return (
        <div className='catalog-container'>
            <h2>Catalog:</h2>
            {filteredResultsByInput.length === 0 ? 
            <div className='catalg-movies'>
                
                {moviesData.map(movie => movie.isRented ?
                    <div className='rented-movie'> <div onClick={() => removeClick(movie.id,user.id)}>➖</div><Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link><h2>{movie.title}</h2></div>
                    :  <div className='not-rented-movie'>  <div onClick={() => plusClick(movie.id,user.id)}>➕</div> <Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link><h2>{movie.title}</h2></div>
                )}
                
            </div>
            
            :  filteredResultsByInput.map(movie => movie.isRented ?
                <div className='rented-movie'> <div >➖</div><Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link><h2>{movie.title}</h2></div>
                : <div className='not-rented-movie'>  <button onClick={() => plusClick(movie.id,user.id)}>➕</button> <Link to={`/movies/${movie.id}`}><img src={movie.img}></img></Link><h2>{movie.title}</h2></div>
            )
        }

            
        </div>


    );
}

const Movie = ({ moviesData, user , plusClick,removeClick}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        let filteredResultsByInput = []
        let { value } = event.target;
        setSearchTerm(value);
        if(value==''){
            filteredResultsByInput = [...moviesData]
        }else{
            filteredResultsByInput = moviesData.filter(movie => movie.title.toUpperCase().includes(value.toUpperCase()));
        }

        // Perform search and update searchResults state
        setSearchResults(filteredResultsByInput);
    }


    return (

        <div>
            <input id='search-input' placeholder='Search' value={searchTerm} onChange={handleSearch} />
                <div className='movies-container'>
                <RentedMovie moviesData={moviesData} filteredResultsByInput={searchResults} removeClick = {removeClick} user={user}/>
                <CatalogMovie moviesData={moviesData}  user={user} filteredResultsByInput={searchResults} plusClick={plusClick} removeClick={removeClick} />
                </div>
        </div>
    );
}

export default Movie;
