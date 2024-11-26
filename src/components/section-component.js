import { LitElement, html, css } from 'lit';

class SectionComponent extends LitElement {
  static styles = css`
    .section {
      padding: 16px;
      border-radius: 8px;
    }
  `;

  render() {
    return html`
      <div class="section">
        <h2><slot name="title"></slot></h2>
        <ul>
          <slot name="item"></slot>
        </ul>
      </div>
    `;
  }
}

customElements.define('section-component', SectionComponent);