class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    set clickEvent(event){
        this._clickEvent= event;
            this.render();
        
    }

    get value() {
        return this.querySelector('#search').value;
    }

    render(){
        this.innerHTML=`
        <form id="form">
            <input type="text" class="search"placeholder="Search" id="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </form>
    `;
    this.querySelector('#searchButtonElement')
    .addEventListener('click', this._clickEvent);
    }
}
customElements.define('search-bar', SearchBar);
