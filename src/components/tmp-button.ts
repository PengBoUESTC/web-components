import templateHtml from '@template/button.p';

type Btn_Type = 'main' | 'error' | 'success' | 'warn';

const Map_Type_Class = {
  main: 'main',
  error: 'error',
  success: 'success',
  warn: 'warn',
};

export default function defineButton(tagName: string) {
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

    get label(): string | null {
      return this.getAttribute('label');
    }

    // set attr by assign
    set label(value: string | null) {
      value && this.setAttribute('label', value);
    }

    set type(value: Btn_Type) {
      this.setAttribute('type', value);
    }

    get type() {
      // @ts-ignore
      return this.getAttribute('type') || 'main';
    }

    // observe user define attrs
    static get observedAttributes() {
      return ['label', 'type'];
    }

    // callback when observed attrs change
    attributeChangedCallback() {
      this.render();
    }

    render() {
      if (!this.$button) return;
      if (this.label != null) {
        this.$button.innerHTML = this.label;
      }
      this.$button.className = Map_Type_Class[this.type];
    }
  }

  window.customElements.define(tagName, Button);
}
