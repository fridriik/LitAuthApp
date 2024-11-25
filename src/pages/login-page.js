//1: librerias que estemos trabajando
import { LitElement, html, css, nothing } from 'lit';
//2: componentes externos
import { Router } from '@vaadin/router';
//3: componentes personalizados
import { AuthMixin } from './../mixins/auth-mixin';
import '../layouts/public-layout.js';
import '../components/alert-component.js';
import '../components/login-component.js';

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
      h1{
        text-align: center;
        color:#f1f8ff;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('login-attempt', this.handleLoginAttempt.bind(this));
    this.addEventListener('login-error', this.handleLoginError.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener('login-attempt',this.handleLoginAttempt.bind(this));
    this.removeEventListener('login-error', this.handleLoginError.bind(this));
    super.disconnectedCallback();
  }

  handleLoginAttempt(event) {
    const { email, password } = event.detail;
    const result = this.login(email, password); 
  
    if (result.success) {
      Router.go('/home'); 
    } else {
      this.dispatchEvent(
        new CustomEvent('login-error', {
          detail: { error: result.error },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  handleLoginError(event) {
    const { error } = event.detail;
    this.alertType = 'error';
    this.alertMessage = `Error en el inicio de sesión ${error}`;
  }

  render() {
    return html`
      <public-layout>
      <h1>Lit Authentication App Login</h1>
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
