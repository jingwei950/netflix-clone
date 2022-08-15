import axios from 'axios'

//Axios configuration
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3" // TMDB API URL
});

export default instance;