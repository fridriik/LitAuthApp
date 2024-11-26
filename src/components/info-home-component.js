import { LitElement, html, css } from 'lit';
import './section-component.js';

class InfoHomeComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    h1 {
      text-align: center;
    }
    a {
      color: #B3FCFF;
    }
    a:hover {
      color: var(--dile-foreground-color);
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .top-row {
      grid-column: span 2;
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

        <section-component>
          <span slot="title">Funcionalidades</span>
          <li slot="item"><strong>Autenticación de Usuario</strong>: Sistema de login y logout básico.</li>
          <li slot="item"><strong>Gestión de Estado</strong>: Persistencia del estado de autenticación en <code>localStorage</code>.</li>
          <li slot="item"><strong>Mixins</strong>: Para verificar y redirigir usuarios autenticados.</li>
          <li slot="item"><strong>Navegación</strong>: Implementación de rutas con <a href="https://github.com/vaadin/router">@vaadin/router</a>.</li>
        </section-component>

        <section-component>
          <span slot="title">Componentes base</span>
          <li slot="item"><strong>login-component</strong>: Formulario para autenticar al usuario.</li>
          <li slot="item"><strong>alert-component</strong>: Muestra mensajes de error en caso de login fallido.</li>
          <li slot="item"><strong>home-page</strong>: Página principal, accesible solo si el usuario está autenticado.</li>
          <li slot="item"><strong>login-page</strong>: Página de inicio de sesión.</li>
        </section-component>

        <section-component>
          <span slot="title">Uso</span>
          <li slot="item"><strong>Ruta <code>/login</code></strong>: Página de inicio de sesión.</li>
          <li slot="item"><strong>Ruta <code>/home</code></strong>: Página protegida, accesible solo con autenticación.</li>
          <li slot="item"><strong>User <code>admin@admin.com</code></strong>: Email para ingresar.</li>
          <li slot="item"><strong>Pass <code>admin123</code></strong>: Contraseña para ingresar.</li>
        </section-component>

        <section-component>
          <span slot="title">Tecnologías</span>
          <li slot="item"><a href="https://lit.dev">Lit</a></li>
          <li slot="item"><a href="https://github.com/vaadin/router">@vaadin/router</a></li>
        </section-component>
      </div>
    `;
  }
}

customElements.define('info-home-component', InfoHomeComponent);