import { serve, sql } from 'bun';
import index from './index.html';

const server = serve({
  routes: {
    '/api/users': {
      async GET(_req) {
        const users = await sql`SELECT * FROM users`;
        return Response.json(users);
      },
      async POST(req) {
        const { name, email } = await req.json();
        const [user] =
          await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;
        return Response.json(user);
      },
    },
    '/api/users/:id': async req => {
      const { id } = req.params;
      const [user] = await sql`SELECT * FROM users WHERE id = ${id}`;
      return Response.json(user);
    },
    '/*': index,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Listening on ${server.url}`);
