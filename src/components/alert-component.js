import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {

    static get properties() {
        return {
            type: { type: String },
            message: { type: String }
        };
    }

    constructor() {
        super();
    }

    static styles = [
        css`
            .alert { 
                padding: 16px; 
                margin: auto; 
                margin-top: 16px; 
                width:50vw; 
                border: 1px solid transparent; 
                border-radius: 8px; 
                font-family:'Trebuchet MS';
            }
            .error { 
                background-color: var(--color-error, #F2DEDE); 
                color: #A94442; 
            }

        `
    ];

    render() {
        return html`
        <div class="alert ${this.type}">
            ${this.message}
        </div>
        `;
    }
}
customElements.define('alert-component', AlertComponent);
