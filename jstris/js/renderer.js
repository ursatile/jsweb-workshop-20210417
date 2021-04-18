//import { Game, Cell, Position } from './game.js';
import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }

    render(game) {
        this.cellSpans = [];
        let cssLink = html.element('link', {
            'href': '../css/jstris.css',
            'rel':'stylesheet',
            'type':'text/css'
        });
        this.root.appendChild(cssLink);
        let grid = html.element('div', {'id' : 'game-grid'});
        game.rows.forEach((cells, rowIndex) => {
            cells.forEach((cell, colIndex) => {
                let span = document.createElement('span');
                this.cellSpans[cell.key] = span;                
                span.innerHTML = ``;
                grid.appendChild(span);                
            });
        });
        this.root.appendChild(grid);
        this.update(game);
    }

    update(game) {
        game.cells.forEach(cell => this.cellSpans[cell.key].className = '');
        game.blocks.forEach(block => {
            block.cells.forEach(cell => this.cellSpans[cell.key].className = block.name);
        });    
    }
}
