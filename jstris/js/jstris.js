import { Game, Cell, Position } from './game.js';
import Renderer from './renderer.js';

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
        game.addBlock();
        this.renderer.render(game);
    }
}

customElements.define("jstris-game", JSTrisGameElement);