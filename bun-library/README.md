# bun-library

This is a template for creating a modern TypeScript library or package using [Bun](https://bun.sh/). It comes pre-configured with essential tools for development, testing, linting, and publishing.

## Features

*   **Bun-first development**: Leverages Bun for lightning-fast installs, runs, and tests.
*   **TypeScript support**: Write type-safe code from the start.
*   **Linting & Formatting**: Enforced with [Biome](https://biomejs.dev/) for consistent code style.
*   **Bundling**: Uses [tsup](https://tsup.js.org/) for efficient bundling into ESM and CJS formats, with type declarations.
*   **Testing**: Built-in unit testing with `bun test`.
*   **Versioning & Publishing**: Managed with [Changesets](https://github.com/changesets/changesets) for streamlined releases to npm.
*   **GitHub Actions**: Continuous Integration (CI) workflows for automated build, test, lint, and publish processes.

## Getting Started

To use this template, you typically would use a scaffolding tool like `bunx create-something -t bun-library`.

### Installation

If you're using this template directly (e.g., after cloning), you can install dependencies with Bun:

```bash
bun install
```

### GitHub Apps

Create a repo on GitHub and install the following apps

- [Changeset Bot](https://github.com/apps/changeset-bot/installations/select_target)
- [pkg.pr.new](https://github.com/apps/pkg-pr-new/installations/select_target)
- [Ellipsis](https://github.com/apps/ellipsis-dev/installations/select_target)

### GitHub Workflow permissions

Go to your repo `Settings` -> `Actions` -> `General` then scroll down to `Workflow permissions` and enable `Allow GitHub Actions to create and approve pull requests`.

If this box is disabled go to your organization settings and enable it there.

### Development

*   **Build**: `bun run build`
*   **Type Check**: `bun run check-types`
*   **Lint**: `bun run lint`
*   **Lint & Fix**: `bun run lint:fix`
*   **Test**: `bun test`
*   **Test (Watch Mode)**: `bun run test:watch`

### Publishing

This repo is built to use npm's 'Trusted Publishing'.

The first time you want to manually deploy the project:

- Ensure you have the right name in `package.json`.
- Run `bun run build`
- Run `npm publish --access public` - authenticate if you need to.
- Go to the settings page of your new package on npm.
- Configure your repo and point the workflow to `publish.yaml`.
- After this, use the flow below.

This template uses Changesets for versioning and publishing.

1.  **Add a changeset**:
    ```bash
    bun changeset
    ```
    Follow the prompts to describe your changes. This will create a markdown file in `.changeset/`.

2.  **Version packages**:
    ```bash
    bun run version
    ```
    This command reads the changeset files, updates package versions, updates `CHANGELOG.md`, and deletes the used changeset files. It also runs `bun lint:fix`.

3.  **Publish to npm**:
    ```bash
    bun run release
    ```
    This command builds the package and publishes it to npm. Ensure you are logged into npm (`npm login`) or have `NPM_TOKEN` configured in your CI environment.

## Project Structure

```
.
├── src/             # Source code for your library
│   └── index.ts     # Main entry point for your library
├── test/            # Unit tests
│   └── index.test.ts # Example test file
├── tsup.config.ts   # Configuration for tsup (bundling)
├── biome.json       # Biome linter/formatter configuration
├── package.json     # Project metadata and scripts
└── ... (other config files and GitHub workflows)
```

## License

MIT – see [LICENSE](./LICENSE).