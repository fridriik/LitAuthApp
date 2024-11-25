import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {
  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  constructor() {
    super();
    this.initProperties();
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 50vw;
        margin: auto;
        border: 1px solid grey;
        border-radius: 8px;
        padding: 16px;
        background-color: #0f1b2b;
      }

      h1 {
        text-align: center;
        margin-top: 8px;
        color: #f1f8ff;
        font-family: 'Trebuchet MS';
      }

      label {
        font-weight: bold;
        font-family: 'Trebuchet MS';
      }

      input {
        padding: 16px;
        font-size: 16px;
        border: 1px solid grey;
        border-radius: 8px;
        font-family: 'Trebuchet MS';
        background-color: #f1f8ff;
        color: #0f1b2b;
      }

      input:hover {
        background-color: #d2e2f2;
      }

      input:focus-visible {
        outline: 2px solid #d2e2f2;
      }

      button {
        margin-top: 8px;
        padding: 16px;
        font-size: 16px;
        border-radius: 8px;
        border-width: 0px;
        background: #0c447b;
        color: #f1f8ff;
        font-family: 'Trebuchet MS';
        cursor: pointer;
      }

      button:hover {
        background: #2a72b9;
      }
    `,
  ];

  handleSubmit(event) {
    event.preventDefault();

    this.dispatchEvent(
      new CustomEvent('login-attempt', {
        detail: {
          email: this.email,
          password: this.password,
        },
        bubbles: true,
        composed: true,
      })
    );

    this.initProperties();
  }

  initProperties() {
    this.email = '';
    this.password = '';
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit} id="loginForm">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          .value=${this.email ?? ''}
          @input=${this.handleInputChange}
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          .value=${this.password ?? ''}
          @input=${this.handleInputChange}
          required
        />
        <button id="bton" type="submit">Iniciar Sesión</button>
      </form>
    `;
  }
}
customElements.define('login-component', LoginComponent);
