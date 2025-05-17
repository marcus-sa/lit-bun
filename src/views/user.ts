import { customElement } from '@lit/reactive-element/decorators.js';
import { css, html } from 'lit';
import { CustomElement } from '../custom-element.ts';

@customElement('user-view')
export class UserView extends CustomElement {
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  override render() {
    return html`<div>User</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-view': UserView;
  }
}
