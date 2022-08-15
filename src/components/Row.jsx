import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axios'

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original'

    //Fetch the movies according to their categories
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl); //Fetch using axios API
            setMovies(request.data.results); //Set the movie results to "movies" variable
            return request;
        }

        fetchData(); //Call function
    }, [fetchUrl])


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
          {movies.map( 
            (movie) => 
              ((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && 
              // movie.backdrop_path || movie.poster_path ? 
              ( //Check if theres image URL, if there is load the image with url
                <img 
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`} 
                  alt={movie.name} 
                />
              // ) : ""
              )
          )}

        </div>
    </div>
  );
}

export default Row