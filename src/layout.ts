import { customElement } from '@lit/reactive-element/decorators.js';
import { css, html } from 'lit';
import { CustomElement } from './custom-element.ts';

@customElement('app-layout')
export class Layout extends CustomElement {
  static override styles = css`
    :host {
      header {
        display: flex;
        flex-direction: row;
        column-gap: 1rem;
      }

      router-link.active {
        color: green;
      }
    }
  `;

  override render() {
    return html`<div>
      <header>
        <router-link to="/"><h1>Home</h1></router-link>
        <router-link to="/user/1" name="user"><h1>User 1</h1></router-link>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': Layout;
  }
}
