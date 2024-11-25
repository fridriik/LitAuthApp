import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 100%;
        min-height: 100vh;
      }
      header, footer {
        background-color: #0f1b2b;
        padding: 16px;
      }
      main {
        background-color: #0c447b;
        color:#f1f8ff;
        padding: 16px;
      }
      footer {
          text-align: center;
        }
    `,
  ];

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
customElements.define('auth-layout', AuthLayout);
