import React from 'react'
import{Card } from 'react-bootstrap';
import "../MovieList/MovieList.css"
import StarRatingComponent from "react-star-rating-component";
import { Link   } from "react-router-dom";


const  MovieList = ({MovieData,movie}) =>{
    return (
        <div className="cardItems">
           <Link to={`/movie/${MovieData.title}`}>
            <img className="img" src={MovieData.posterUrl} />
            <Card.Body className='bodyCard'>
                <Card.Title className="title">{MovieData.title}</Card.Title>
                <Card.Text className='description'>
                    {MovieData.description}<br />
                    </Card.Text>    
                    <div className="rate">
                    Rate : <span>{MovieData.rating}</span>
                    </div>
            </Card.Body>
            </Link>
        </div>
    )
}

export default MovieList