// movie-list.js
class MovieListElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        let list = document.createElement('ul');
        list.innerHTML = `       
        <li>Alien</li>
        <li>Back to the Future</li>
        <li>Dirty Dancing</li>
        <li>Jumanji</li>
        <li>Zoolander</li>`;
        this.shadowRoot.appendChild(list);
    }
  }

  customElements.define('movie-list', MovieListElement);
