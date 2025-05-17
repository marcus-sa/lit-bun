import { Class } from 'type-fest';
import { CustomElement } from './custom-element.ts';

export interface ElementEventListenerHandler<
  K extends keyof HTMLElementEventMap | keyof WindowEventMap,
> {
  type: K;
  name: string;
  options?: boolean | ElementAddEventListenerOptions;
}

export interface ElementAddEventListenerOptions
  extends AddEventListenerOptions {
  readonly target?: EventTarget;
}

/** @internal */
export const elementEventListenerHandlers = new WeakMap<
  Class<CustomElement>,
  Set<ElementEventListenerHandler<any>>
>();

export function eventListener<
  K extends keyof HTMLElementEventMap | keyof WindowEventMap,
>(type: K, options?: boolean | ElementAddEventListenerOptions) {
  return (target: CustomElement, propertyKey: string) => {
    const handlers =
      elementEventListenerHandlers.get(
        target.constructor as Class<CustomElement>,
      ) || new Set<ElementEventListenerHandler<any>>();
    handlers.add({
      type,
      name: propertyKey,
      options,
    });
    elementEventListenerHandlers.set(
      target.constructor as Class<CustomElement>,
      handlers,
    );
  };
}
