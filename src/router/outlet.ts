import { provide } from '@lit/context';
import { customElement } from '@lit/reactive-element/decorators.js';
import { Route, Router } from '@vaadin/router';
import { html } from 'lit';
import { CustomElement } from '../custom-element.ts';
import { routerContext } from './context.ts';

@customElement('router-outlet')
export class RouterOutlet extends CustomElement {
  @provide({ context: routerContext })
  readonly router = new Router(this);

  static async render(root: HTMLElement, routes: readonly Route[]) {
    const outlet = document.createElement('router-outlet');
    root.appendChild(outlet);
    await outlet.router.setRoutes(routes);
    return outlet;
  }

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'router-outlet': RouterOutlet;
  }
}
