import { LitElement, html, css } from 'lit';
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/hamburger/hamburger.js';
import '../layouts/auth-layout.js';

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        --dile-primary-color: #0f1b2b;
        --dile-foreground-color: #f1f8ff;
      }
      h2 {
        margin: 0;
      }
      .hamburger2 {
        position: relative;
        top: -2px;
        --dile-hamburger-padding-x: 0;
        --dile-hamburger-color: #369;
      }
    `,
  ];

  render() {
    return html`
      <auth-layout>
        <dile-nav slot="header" menu="right">
          <h2 slot="title">HomePage</h2>
          <dile-hamburger class="hamburger2" slot="menu">
            <nav slot="menu">
              <p><a href="one.html">Link One</a></p>
              <p><a href="two.html">Link Two</a></p>
            </nav>
          </dile-hamburger>
          <span slot="actions">Action</span>
        </dile-nav>
        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
