class TextFormatterHTMLElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.formats = {
			bold: 'font-weight',
			italic: 'font-style',
			underline: 'text-decoration',
		};
	}

	connectedCallback() {
		let style = document.createElement('style');
		style.innerHTML = `
			button {
				height: 32px;
				width: 32px;
				border: 1px solid #000; 
				border-radius: 4px;
				margin: 0 4px 0 0;
				color: #000;
				background: #abcdef;
				cursor: pointer;
			}
			button:focus {outline: none}`;
		this.shadowRoot.appendChild(style);

		for(const [format, property] of Object.entries(this.formats)) {
			let button = document.createElement('button');
			button.style[property] = format;
			button.innerHTML = format.substr(0, 1).toUpperCase();
			button.addEventListener('click', () => {
				let customEvent = new CustomEvent('format-text', { detail: { [property]: format } });
				this.dispatchEvent(customEvent);
			});
			this.shadowRoot.appendChild(button);
		}
	}
}

customElements.define('text-formatter', TextFormatterHTMLElement);