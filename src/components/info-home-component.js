import { LitElement, html, css } from 'lit';

class InfoHomeComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    h1 {
      text-align: center;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      gap: 16px;
    }
    .top-row {
      grid-column: span 2;
    }
    .section {
      padding: 16px;
      border-radius: 8px;
    }
  `;

  render() {
    return html`
      <div class="grid-container">
        <div class="top-row">
          <h1>Lit Authentication App</h1>
          <p>
            Este proyecto es una aplicación web pequeña que utiliza
            <a href="https://lit.dev">Lit</a> para crear componentes web
            reutilizables. Se enfoca en la autenticación de usuarios, navegación
            entre páginas y gestión de estado con <code>localStorage</code>.
          </p>
        </div>

        <div class="section">
          <h2>Funcionalidades</h2>
          <ul>
            <li>
              <strong>Autenticación de Usuario</strong>: Sistema de login y
              logout básico.
            </li>
            <li>
              <strong>Gestión de Estado</strong>: Persistencia del estado de
              autenticación en <code>localStorage</code>.
            </li>
            <li>
              <strong>Mixins</strong>: Para verificar y redirigir usuarios
              autenticados.
            </li>
            <li>
              <strong>Navegación</strong>: Implementación de rutas con
              <a href="https://github.com/vaadin/router">@vaadin/router</a>.
            </li>
          </ul>
        </div>

        <div class="section">
          <h2>Componentes base</h2>
          <ol>
            <li>
              <strong>login-component</strong>: Formulario para autenticar al
              usuario.
            </li>
            <li>
              <strong>alert-component</strong>: Muestra mensajes de error en
              caso de login fallido.
            </li>
            <li>
              <strong>home-page</strong>: Página principal, accesible solo si el
              usuario está autenticado.
            </li>
            <li><strong>login-page</strong>: Página de inicio de sesión.</li>
          </ol>
        </div>

        <div class="section">
          <h2>Uso</h2>
          <ul>
            <li>
              <strong>Ruta <code>/login</code></strong
              >: Página de inicio de sesión.
            </li>
            <li>
              <strong>Ruta <code>/home</code></strong
              >: Página protegida, accesible solo con autenticación.
            </li>
            <li>
              <strong>User <code>admin@admin.com</code></strong
              >: Email para ingresar.
            </li>
            <li>
              <strong>Pass <code>admin123</code></strong
              >: Contraseña para ingresar.
            </li>
          </ul>
        </div>

        <div class="section">
          <h2>Tecnologías</h2>
          <ul>
            <li><a href="https://lit.dev">Lit</a></li>
            <li>
              <a href="https://github.com/vaadin/router">@vaadin/router</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('info-home-component', InfoHomeComponent);
