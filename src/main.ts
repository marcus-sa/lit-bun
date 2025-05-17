import { RouterOutlet } from './router';
import './layout.ts';
import './views/home.ts';

await RouterOutlet.render(document.getElementById('root')!, [
  {
    path: '/',
    component: 'app-layout',
    children: [
      { path: '/', component: 'home-view' },
      {
        path: '/user/:id',
        name: 'user',
        component: 'user-view',
        action: async () => {
          await import('./views/user.ts');
        },
      },
    ],
  },
]);
