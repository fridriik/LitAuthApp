import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { AuthMixin } from '../mixins/auth-mixin';

export class RouterApp extends AuthMixin(LitElement) {
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      {
        path: '/home',
        component: 'home-page',
        //Context contiene info del path y params
        //Commands funciones para controlar navegación
        action: (context, commands) => {
          if (!this.checkAuth()) {
            return commands.redirect('/login');
          }
        },
      },
      {
        path: '/login',
        component: 'login-page',
        action: (context, commands) => {
          if (this.checkAuth()) {
            return commands.redirect('/home');
          }
        },
      },
      { path: '/', component: 'login-page' },
    ]);
  }

  static styles = [
    css`
      :host {
        width: 100%;
      }
    `,
  ];

  render() {
    return html`<div id="outlet"></div>`;
  }
}
customElements.define('router-app', RouterApp);
