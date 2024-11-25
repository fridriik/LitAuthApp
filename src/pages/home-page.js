import { LitElement, html, css } from 'lit';
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/hamburger/hamburger.js';
import { AuthMixin } from './../mixins/auth-mixin';
import '../layouts/auth-layout.js';
import { Router } from '@vaadin/router';

export class HomePage extends AuthMixin(LitElement) {
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

  handleLogOut() {
    this.logout();
    Router.go('/login');
  }

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
          <button slot="actions" @click="${this.handleLogOut}">Logout</button>
        </dile-nav>
        <div slot="main">
          <h1>Lit Auth App</h1>
        </div>
        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
