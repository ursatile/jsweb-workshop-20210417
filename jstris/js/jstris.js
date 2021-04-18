class Game {
    constructor(rowCount, colCount) {

    }
}

class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }

    render(game) {
        let element = document.createElement('h1');
        element.innerHTML = 'Hey!';
        this.root.appendChild(element);
    }
}

class JSTrisGameElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {
        let rowCount = parseInt(this.getAttribute("rows")) || 20;
        let colCount = parseInt(this.getAttribute("cols")) || 20;
        let game = new Game(rowCount, colCount);
        this.renderer.render(game);
    }
}

customElements.define("jstris-game", JSTrisGameElement);