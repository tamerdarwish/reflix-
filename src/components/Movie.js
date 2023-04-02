import './Components.css';
import React, { useState } from 'react';
import RentedMovie from './RentedMovie';
import CatalogMovie from './CatalogMovie';

const Movie = ({ moviesData, user , plusClick,removeClick}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        let filteredResultsByInput = []
        let { value } = event.target;
        setSearchTerm(value);
        if(value==''){
            filteredResultsByInput = [...moviesData]

        }
        else{
            filteredResultsByInput = moviesData.filter(movie => movie.title.toUpperCase().includes(value.toUpperCase()));
        }

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
