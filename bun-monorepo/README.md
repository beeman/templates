# Monorepo Template

A modern, high-performance monorepo template built with [Bun](https://bun.sh) and [Turbo](https://turbo.build).

## Features

- **Package Manager**: [Bun](https://bun.sh) for fast installation and script execution
- **Build System**: [Turbo](https://turbo.build) for high-performance build orchestration
- **Frontend**: [React](https://react.dev) with [Vite](https://vitejs.dev)
- **Formatting & Linting**: [Biome](https://biomejs.dev) for fast and correct code analysis
- **Git Hooks**: [Lefthook](https://github.com/evilmartians/lefthook) for managing git hooks
- **Type Safety**: TypeScript throughout

## Requirements

- [FNM](https://github.com/Schniz/fnm) or [NVM](https://github.com/nvm-sh/nvm)
- [Node.js](https://nodejs.org) (v20+)
- [Bun](https://bun.sh) (v1.0+)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-name>

# Install dependencies
bun install
```

## Usage

### Development

Start the development server for all apps:

```bash
bun dev
```

Or filter for a specific app:

```bash
bun dev --filter=web
```

### Build

Build all packages and apps:

```bash
bun run build
```

### Code Quality

Run linting and formatting checks:

```bash
# Lint
bun lint

# Fix linting issues
bun lint:fix

# Type check
bun check-types
```

## Project Structure

```
.
├── apps/               # Application source code
│   ├── api/           # Backend API
│   └── web/           # Frontend Web Application
├── packages/          # Shared packages
│   ├── config-*/      # Shared configuration (TypeScript, Vite, etc.)
│   ├── env/           # Environment variable handling
│   ├── shell/         # Shared shell/layout components
│   └── ui/            # Shared UI component library
└── turbo/             # Turbo configuration and generators
```

## Contributing

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
