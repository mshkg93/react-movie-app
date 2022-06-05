//This is config file for the TMDB api

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;
const LANGUAGE = 'en-US';

const SEARCH_BASE_URL = `${API_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=`;

const POPULAR_BASE_URL = `${API_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=`;

//URL for the movie details
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

//Images sizes
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  LANGUAGE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
