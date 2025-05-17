import { consume } from '@lit/context';
import type {
  Router,
  RouterLocation,
  VaadinRouterLocationChangedEvent,
} from '@vaadin/router';
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { CustomElement } from '../custom-element.ts';
import { eventListener } from '../event-listener.ts';
import { routerContext } from './context.ts';
import { navigate } from './navigate.ts';

@customElement('router-link')
export class RouterLink extends CustomElement {
  @property({ type: String })
  readonly to: string;

  @property({ type: String })
  readonly name?: string;

  @property({ type: String })
  readonly path?: string;

  @property({ type: String })
  readonly component?: string;

  @property({ type: String })
  readonly activeClass: string = 'active';

  @state()
  protected active = false;

  @consume({ context: routerContext })
  readonly router: Router;

  override connectedCallback() {
    super.connectedCallback();

    if (this.#isActive(this.router.location)) {
      this.classList.add(this.activeClass);
    }
  }

  // TODO: match partial route path
  #isActive({ route, pathname }: RouterLocation): boolean {
    return (
      route?.component === this.component ||
      route?.path === this.path ||
      route?.name === this.name ||
      this.to === pathname
    );
  }

  @eventListener('vaadin-router-location-changed', { target: window })
  protected locationChangedHandler(e: VaadinRouterLocationChangedEvent) {
    if (this.#isActive(e.detail.location)) {
      this.classList.add(this.activeClass);
    } else {
      this.classList.remove(this.activeClass);
    }
  }

  @eventListener('click')
  protected clickHandler(e: MouseEvent) {
    e.preventDefault();
    navigate(this.to);
  }

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'router-link': RouterLink;
  }
}
