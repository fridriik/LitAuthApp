//1: librerias que estemos trabajando
import { LitElement, html, css, nothing } from 'lit';
//2: componentes externos
import { Router } from '@vaadin/router';
//3: componentes personalizados
import { AuthMixin } from './../mixins/auth-mixin';
import '../layouts/public-layout.js';
import '../components/alert-component.js';
import '../components/login-component.js';
//4: estilos

export class LoginPage extends AuthMixin(LitElement) {
  static get properties() {
    return {
      alertType: { type: String },
      alertMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.alertType = '';
    this.alertMessage = '';
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('login-error', this.handleLoginError.bind(this));
    this.addEventListener('login-success', this.handleLoginSuccess.bind(this));
    this.addEventListener('login-warning', this.handleLoginWarning.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener('login-error', this.handleLoginError.bind(this));
    this.removeEventListener(
      'login-success',
      this.handleLoginSuccess.bind(this)
    );
    this.removeEventListener(
      'login-warning',
      this.handleLoginWarning.bind(this)
    );
    super.disconnectedCallback();
  }

  handleLoginError(event) {
    const { error } = event.detail;
    this.alertType = 'error';
    this.alertMessage = `Error en el inicio de sesión ${error || ''}`;
  }

  handleLoginSuccess(event) {
    const token = 'true';
    this.login(token);
    this.alertType = 'success';
    this.alertMessage = 'Inicio de sesión exitoso';
    console.log(event);
    Router.go('/home');
  }

  handleLoginWarning(event) {}

  render() {
    return html`
      <public-layout>
        <login-component></login-component>
        ${this.alertType
          ? html`<alert-component
              .type=${this.alertType}
              .message=${this.alertMessage}
            ></alert-component>`
          : nothing}
      </public-layout>
    `;
  }
}
customElements.define('login-page', LoginPage);
