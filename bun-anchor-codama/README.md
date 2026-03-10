# Solana Starter Program

This project is a Solana program developed with Anchor, using Bun for dependency management, TypeScript for client-side
interactions and tests, and Vitest for testing.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Rust:** Ensure you have Rust and `cargo` installed. You can install it via [rustup](https://rustup.rs/).
- **Solana:** Install the Solana CLI. Follow the instructions on the [Solana documentation](https://docs.solana.com/cli/install-solana-cli).
- **Anchor:** Install Anchor CLI. Refer to the [Anchor documentation](https://www.anchor-lang.com/docs/installation).
- **Bun:** Install Bun. Follow the instructions on the [Bun website](https://bun.sh/docs/installation).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd bun-anchor-codama
    ```

2.  **Install JavaScript dependencies:**
    This project uses Bun for package management.
    ```bash
    bun install
    ```

### Building the Program

To build the Solana program and generate its Interface Definition Language (IDL) file:

```bash
bun run build
```

### Code Generation

This project uses [Codama](https://codama.dev) to generate a TypeScript client from the program's IDL. This ensures the client is always in sync with the on-chain program's interface.

To run code generation, use the following command:

```bash
bun run generate
```

This command reads the IDL from `target/idl/solana_starter.json` and generates the TypeScript client in the `clients/js/src/generated` directory. The command also formats the generated code using Prettier. You must run this command whenever you make changes to the on-chain program's instructions or accounts.

### Running Tests

Tests are written in TypeScript and use Vitest. They are invoked using the `anchor` CLI which automatically deploys your program to a localnet clsuter.

```bash
bun run test
```

### Deploying the Program

To deploy the program to a Solana cluster (e.g., devnet, localnet):

```bash
anchor deploy
```

Make sure your `Anchor.toml` is configured for the desired cluster.

### Interacting with the Program

You can find example interactions in the `tests/basic.test.ts` file. You can also write custom scripts in the
`app/` directory using TypeScript.

## Project Structure

- `programs/solana_starter/`: The Solana Anchor program source code (Rust).
- `clients/js/`: The TypeScript client for interacting with the on-chain program, with generated code in `clients/js/src/generated`.
- `tests/`: TypeScript test files using Vitest.
- `app/`: Client-side application code (TypeScript).
- `Anchor.toml`: Anchor project configuration.
- `codama.js`: Configuration for the Codama code generation tool.
- `target/idl/solana_starter.json`: The generated Interface Definition Language (IDL) file for the program.
- `package.json`, `bun.lockb`, `tsconfig.json`: JavaScript/TypeScript project configuration and dependencies.

## Development Guide

For more detailed information on development workflows, including linting, type-checking, and general project conventions, please refer to the [AGENTS.md](AGENTS.md) file.
