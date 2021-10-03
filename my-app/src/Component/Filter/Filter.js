import React  from 'react'
import "./Filter.css"
import MovieCard from '../MovieCard/MovieCard'
 


function Filter({ MovieData , rate ,searchTerm   }) {   
    const filteredMovies = MovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())  && movie.rating >= rate
    );
    return (
        <div>
                <MovieCard filteredMovies={filteredMovies} />
        </div>
    )
}

export default Filter