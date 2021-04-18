import { Game, Cell, Position } from './game.js';
import Renderer from './renderer.js';

class JSTrisGameElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {
        let rowCount = parseInt(this.getAttribute("rows")) || 20;
        let colCount = parseInt(this.getAttribute("cols")) || 20;
        this.game = new Game(rowCount, colCount);
        this.game.addBlock();
        this.renderer.render(this.game);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
    }

    handleKeydown(event) {
        switch (event.code) {
            case "ArrowLeft":
                this.game.move('left'); break;
            case "ArrowRight":
                this.game.move('right'); break;
        }
        this.renderer.update(this.game);
    }
}

customElements.define("jstris-game", JSTrisGameElement);