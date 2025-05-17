import { createContext } from '@lit/context';
import { Router } from '@vaadin/router';

export const routerContext = createContext<Router>('router');
