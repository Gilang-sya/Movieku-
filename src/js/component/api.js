
const API_KEY = 'api_key=f29ba6b86ba3360a9f9444fa860246c2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = `${BASE_URL} /search/movie? ${API_KEY}`;

export {IMG_URL,API_URL,searchURL}