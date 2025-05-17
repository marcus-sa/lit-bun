# lit-bun

A web application template using Lit, Bun and Vaadin Router for simplicity and speed.

## Features

- **Fast Development**: Built with Bun for quick startup and hot module reloading
- **Component-Based UI**: Uses Lit for creating fast, lightweight web components
- **Client-Side Routing**: Implements Vaadin Router for seamless navigation
- **Server-Side API**: Includes a simple REST API with Bun's built-in server
- **Database Integration**: Uses Bun's SQL capabilities for data persistence
- **TypeScript Support**: Full TypeScript integration for better developer experience
- **Code Quality**: Includes Biome for linting and formatting

## Prerequisites

- [Bun](https://bun.sh/) (latest version)

## Installation

```bash
# Clone the repository
git clone https://github.com/marcus-sa/lit-bun.git
cd lit-bun

# Install dependencies
bun install
```

## Usage

### Development

Start the development server with hot reloading:

```bash
bun run dev
```

The application will be available at http://localhost:3000 by default.

### Code Quality

Check code quality:

```bash
bun run check
```

Fix code quality issues:

```bash
bun run check:fix
```

## Project Structure

```
lit-bun/
├── src/
│   ├── router/       # Client-side routing implementation
│   ├── views/        # Page components
│   ├── custom-element.ts  # Base class for custom elements
│   ├── index.html    # HTML entry point
│   ├── layout.ts     # Application layout component
│   ├── main.ts       # Client-side entry point
│   ├── server.ts     # Server-side entry point
│   └── styles.css    # Global styles
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── biome.json        # Biome configuration
```

## Technologies

- [Lit](https://lit.dev/) - A lightweight library for building fast, lightweight web components
- [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime
- [Vaadin Router](https://vaadin.com/router) - A client-side router for web components
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
- [Biome](https://biomejs.dev/) - A fast linter and formatter for JavaScript and TypeScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the terms found in the [LICENSE](LICENSE) file.
