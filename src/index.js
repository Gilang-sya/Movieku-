import './style/style.css';
import './js/component/searchBar.js';
import './js/component/tranding.js';
// import './js/component/searchbar-app.js'
const searchElement = document.getElementById('search');
searchElement.addEventListener('keyup',(e)=>{
    console.log(e.target.value)
    const searchString = (e.target.value)
    const filteredchara = data.filter(chara=>{
        chara.name.includes(searchString)||
        chara.house.includes(searchString)
    })
    console.log(filteredchara)
})