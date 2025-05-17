import { customElement } from '@lit/reactive-element/decorators.js';
import { html } from 'lit';
import { CustomElement } from '../custom-element.ts';

@customElement('home-view')
export class HomeView extends CustomElement {
  override render() {
    return html`<div>Home</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-view': HomeView;
  }
}
