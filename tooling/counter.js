import Renderer from './renderer.js';
import CountingEngine from './counting-engine.js';

export default class MyCounterElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {
        let count = parseInt(this.getAttribute("initial-value"));
        this.engine = new CountingEngine(count);
        this.renderer.render(this.engine);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
        this.renderer.incrementButton.addEventListener("click", this.incrementButtonClick.bind(this));
        this.renderer.decrementButton.addEventListener("click", this.decrementButtonClick.bind(this));
    }

    incrementButtonClick(event) {
        this.engine.increment();
        this.renderer.update(this.engine);
    }

    decrementButtonClick(event) {
        this.engine.decrement();
        this.renderer.update(this.engine);
    }

    handleKeydown(event) {
        event.preventDefault();
        switch(event.code) {
            case "ArrowUp": this.engine.increment(); break;
            case "ArrowDown": this.engine.decrement(); break;
            default: return;
        }
        this.renderer.update(this.engine);
    }
}

customElements.define("my-counter", MyCounterElement);