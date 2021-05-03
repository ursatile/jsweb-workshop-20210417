class ColorPickerElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let style = document.createElement('style');
        style.innerHTML = `button { width: 32px; height: 32px; border: 1px solid #fff; border-radius: 16px; cursor: pointer;  } button:focus { outline: none; }`;
        this.shadowRoot.appendChild(style);

        let colors = ["#50c236", "#16856f", "#efc306", "#025594", "#b51f8f", "#ff6c53", "#a85642"];
        colors.forEach(color => {
            let button = document.createElement('button');
            button.style.backgroundColor = color;
            button.addEventListener('click', () => {
                let customEvent = new CustomEvent('pick-color', { detail: color });
                this.dispatchEvent(customEvent);
            });
            this.shadowRoot.appendChild(button);
        });
    }
}

customElements.define("color-picker", ColorPickerElement);