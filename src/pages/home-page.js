import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';
import { AuthMixin } from './../mixins/auth-mixin';
import '../layouts/auth-layout.js';
import '../components/info-home-component.js'


export class HomePage extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        --dile-primary-color: #0f1b2b;
        --dile-foreground-color: #f1f8ff;
        --dile-primary-light-color: #0c447b;
      }
      nav {
        display: flex;
        align-items: stretch;
        padding: 16px;
      }
      title {
        overflow:auto;
      }
      h2 {
        margin: 0;
      }
      button {
        margin-top: 8px;
        padding: 16px;
        font-size: 16px;
        border-radius: 8px;
        border-width: 0px;
        background: #a01c1c;
        color: #f1f8ff;
        font-family: 'Trebuchet MS';
        cursor: pointer;
      }

      button:hover {
        background-color: #d53333;
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
        <dile-nav slot="header" menu="left">
          <h2 slot="title">HomePage</h2>
          <dile-menu-hamburger slot="menu" direction="left">
            <nav slot="menu">
              <button slot="actions" @click="${this.handleLogOut}">
                Logout
              </button>
            </nav>
          </dile-menu-hamburger>
        </dile-nav>
        <info-home-component slot="main"></info-home-component>
        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
