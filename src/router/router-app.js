import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { AuthMixin } from '../mixins/auth-mixin';

export class RouterApp extends AuthMixin(LitElement) {
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      {
        path: '/',
        action: this.handleRedirect.bind(this, '/home', '/login'),
      },
      {
        path: '/home',
        component: 'home-page',
        action: this.handleRedirect.bind(this, null, '/login'),
      },
      {
        path: '/login',
        component: 'login-page',
        action: this.handleRedirect.bind(this, '/home', null),
      },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  //RedirectIfAuth - ruta si está autenticado
  //RedirectIfNotAuth - ruta si no está autenticado.
  //Commands - funciones para controlar navegación
  handleRedirect(redirectIfAuth, redirectIfNotAuth, context, commands) {
    const isAuth = this.checkAuth();
    if (isAuth && redirectIfAuth) {
      return commands.redirect(redirectIfAuth);
    }
    if (!isAuth && redirectIfNotAuth) {
      return commands.redirect(redirectIfNotAuth);
    }
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
