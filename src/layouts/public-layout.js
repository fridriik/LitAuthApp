import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f1f8ff;
        width: 100vw;
        height: 100vh;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('public-layout', PublicLayout);