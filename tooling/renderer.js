import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }
    render(counterEngine) {
        const cssLink = html.element('link', 
            { "rel":"stylesheet", "href":"counter.css", "type": "text/css" });
        this.root.appendChild(cssLink);

        this.incrementButton = html.element('button', {}, '+');
        this.decrementButton = html.element('button', {}, '–');

        this.span = html.element('span', { id: "counter" }, counterEngine.count);
        let div = html.element('div', { "class": "counter-wrapper" });
        div.appendChild(this.span);
        this.root.appendChild(this.decrementButton);
        this.root.appendChild(div);
        this.root.appendChild(this.incrementButton);
    }

    update(counterEngine) {
        this.span.innerHTML = counterEngine.count;
    }
}