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
            
        </form>
    `;
    
    }
}
customElements.define('search-bar', SearchBar);
