import searchURL from './tranding.js'
const form = ducument.getElementById('search');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchValue=search.value
    if(searchValue &&searchValue !==''){
        getMovies(searchURL+searchValue)
        searchValue=''
    }else{
        window.location.reload()
    }
})