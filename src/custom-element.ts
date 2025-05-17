import { LitElement } from 'lit';
import { Class } from 'type-fest';
import { elementEventListenerHandlers } from './event-listener.ts';

export class CustomElement extends LitElement {
  readonly #boundEventListeners = new Set<() => void>();

  override connectedCallback() {
    super.connectedCallback();

    const eventListenerHandlers = elementEventListenerHandlers.get(
      this.constructor as Class<this>,
    );

    if (eventListenerHandlers) {
      for (const { type, name, options } of eventListenerHandlers) {
        // console.log(this, { type, name, options });
        const target =
          (typeof options !== 'boolean' && options?.target) || this;
        const handler = (this as any)[name].bind(this);
        target.addEventListener(type, handler, options);

        this.#boundEventListeners.add(() => {
          target.removeEventListener(type, handler, options);
        });
      }
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    for (const unbind of this.#boundEventListeners) {
      unbind();
    }
    this.#boundEventListeners.clear();
  }
}
