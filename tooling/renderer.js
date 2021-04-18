import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }
    render(counterEngine) {
        const cssRules = `div.counter-wrapper {
            border: 2px solid #036;
            border-radius: 8px;
            display: inline-block;
            padding: 8px;
        }
        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 200%;
            margin: 8px;
            width: 32px;
            overflow: hidden;
            border: 0;
            background-color: #036;
            border-radius: 8px;
            color: #fff;
        }
        div.counter-wrapper span {
            font-family: Consolas;
            font-weight: bold;
            color: #036;
            font-size: 200%;
        }`;
        const style = html.element('style', { type: "text/css" }, cssRules);
        this.root.appendChild(style);

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