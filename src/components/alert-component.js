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
                border-color: #EBCCD1; 
            }
            .success { 
                background-color: var(--color-success,#DFF0D8); 
                color: #3C763D; 
                border-color: #D6E9C6;
            }
            .info { 
                background-color: var(--color-info,#D9EDF7); 
                color: #31708F; 
                border-color: #BCE8F1; 
            }
            .warning { 
                background-color: var(--color-warning,#FFE5B4); 
                color: #D2691E; 
                border-color: #FFCC99; 
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
