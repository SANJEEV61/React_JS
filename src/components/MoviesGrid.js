import { useEffect, useState } from 'react';
import React from "react";
import '../styles.css';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);

useEffect(() => {
        fetch("movies.json")
        .then((response) => response.json())
        .then((data) => setMovies(data));

    }, []);

 return(
    <div className='movie-grid'>
        {
        movies.map((movie) => (
            <div key = {movie.id} className='movie-card'>
                <img src={`images/${movie.image}`} alt={movie.title} className='movie-poster'/>     
            </div>
         ))
        }  
    </div>
 );
}