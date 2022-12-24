import React, { useEffect, useState } from 'react'
import './Banner.css'
import { FaPlay } from 'react-icons/fa'
import { CgInfo } from 'react-icons/cg'
import axios from '../axios'
import requests from '../Requests'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);

        }

        fetchData();
    }, [])

    //Check if the string is more than 150 characters, if it is add '...'
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }


  return (
    <header 
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}')`,
            backgroundPosition: "center center",
        }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                
                <button className="banner_button">
                    <FaPlay className="button_icon" size={17}/> Play
                </button>
                <button className="banner_button" style={{backgroundColor: 'rgba(255,255,255,0.5)', color: 'white'}}>
                    <CgInfo className="button_icon" size={17} />
                    More info
                </button>
            </div>
            <h1 className="banner_description">
                {
                    truncate(`${movie.overview}`, 150)
                }
            </h1>
        </div>

        <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner