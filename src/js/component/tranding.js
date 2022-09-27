//TMDB 

const API_KEY = 'api_key=f29ba6b86ba3360a9f9444fa860246c2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = `${BASE_URL} /search/movie? ${API_KEY}`;

const main = document.getElementById('main');

getMovies(API_URL);
function getMovies(url){

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }
const showMovies= (data) =>{
    main.innerHTML = '';
    
    data.forEach(movie => {
        const{title, poster_path,release_date , vote_average, overview,genre_ids} = movie;
        const filmMovie = document.createElement('div');
        filmMovie.classList.add('movie');
        filmMovie.innerHTML=`
            <img src=${IMG_URL+poster_path} style="width: 100%;" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
                <p>Release: ${release_date}</p>
                <h4>${genre_ids}</h4>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(filmMovie);
    });
}

const getColor=(vote) => { 
    if(vote>= 8){
    return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}


// function getColor(vote) {
   
// }
