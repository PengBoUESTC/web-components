import templateHtml from '../template/button.p';

export default function defineButton() {
  const template = document.createElement('template');

  template.innerHTML = templateHtml;

  class Button extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    private $button: HTMLButtonElement | null;

    constructor() {
      super();

      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this.$button = this._shadowRoot.querySelector('button');
    }

    // lifeCyles
    connectedCallback() {
      console.log(`${this.tagName || ''} connected`);
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    get label() {
      return this.getAttribute('label') || 'name';
    }

    // set attr by assign
    set label(value) {
      this.setAttribute('label', value);
    }

    // observe user define attrs
    static get observedAttributes() {
      return ['label'];
    }

    // callback when observed attrs change
    attributeChangedCallback() {
      this.render();
    }

    render() {
      if (!this.$button) return;
      this.$button.innerHTML = this.label;
    }
  }

  window.customElements.define('my-button', Button);
}
