import React from 'react'
import MovieList from '../MovieList/MovieList'
import '../../App.css';


const MovieCard = (props) => {
    return (
        <div className="moviecard">
               {props.filteredMovies.map((MovieData, index) => { return <MovieList key={index} MovieData={MovieData}/> })}
        </div>
    )
}

export default MovieCard