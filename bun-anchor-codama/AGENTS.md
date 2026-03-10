# Agent Onboarding

This document provides instructions on how to structure, test, and build this project.

## Prerequisites

Before working on this project, ensure you have the following installed:

- **Rust** (with `rustup`): Install via [rustup.rs](https://rustup.rs/)
- **Solana CLI**: Install via [Solana Docs](https://docs.solana.com/cli/install-solana-cli-tools)
- **Anchor CLI**: Install via `cargo install --git https://github.com/coral-xyz/anchor avm --locked`
- **Bun**: Install via [bun.sh](https://bun.sh/)

## Initial Setup

After cloning the repository, install dependencies:

```bash
bun install
```

## Project Structure

The project is a Solana program built with the Anchor framework.

### Key Directories and Files

- `programs/solana_starter/src/`: Rust source code for the on-chain program.
- `clients/js/`: TypeScript client for interacting with the on-chain program.
- `clients/js/src/generated/`: Auto-generated client code (do not edit manually).
- `tests/`: Integration tests written in TypeScript using Vitest.
- `target/idl/solana_starter.json`: Generated IDL file.
- `target/`: Build artifacts including program binary.
- `Anchor.toml`: Main Anchor configuration file.
- `codama.js`: Codama code generation configuration.
- `vitest.config.ts`: Vitest test runner configuration.

## Anchor Program Structure (Generic)

This project generally follows a modular structure for Anchor programs.

- **`programs/<program_name>/src/lib.rs`**: The main entry point for the Anchor program. It declares the program ID, defines the top-level program module, and acts as a dispatcher for instructions, delegating logic to separate instruction handler files. It also re-exports modules for constants, errors, instructions, and state.

- **`programs/<program_name>/src/instructions/`**: This directory contains individual Rust modules for each instruction defined in the program.

  - Each instruction file (e.g., `initialize.rs`, `my_instruction.rs`) typically defines:
    - An `#[derive(Accounts)]` struct that specifies the accounts required for that particular instruction, along with their constraints (e.g., `init`, `mut`, `signer`, `payer`, `seeds`, `bump`).
    - A `handler` function that implements the core business logic for the instruction. This function takes the `Context` of the accounts and any instruction-specific arguments.
  - **`programs/<program_name>/src/instructions/mod.rs`**: This file aggregates and re-exports all individual instruction modules, making them accessible to `lib.rs`.

- **`programs/<program_name>/src/state/`**: This directory contains individual Rust modules for each custom account state defined in the program.

  - Each state file (e.g., `my_account.rs`, `operator.rs`) typically defines:
    - An `#[account]` struct that represents the on-chain data structure, including fields and their data types.
  - **`programs/<program_name>/src/state/mod.rs`**: This file aggregates and re-exports all individual state modules, making them accessible to `lib.rs` and other modules.

- **`programs/<program_name>/src/error.rs`**: Defines custom error codes using Anchor's `#[error_code]` attribute. These errors can be returned from instruction handlers to provide more specific feedback on failures.

- **`programs/<program_name>/src/constants.rs`**: Contains program-wide constants that might be used across different instructions or state definitions.

## Core Development Workflow

The typical development workflow is as follows:

1.  **Modify the on-chain program:** Make changes to the Rust code in `programs/solana_starter/src`.
2.  **Build the program:** Compile the program and generate the IDL.
3.  **Generate the client:** Update the TypeScript client based on the new IDL.
4.  **Write/update tests:** Add or modify tests in the `tests/` directory to reflect the changes.
5.  **Run tests:** Execute the tests to ensure everything is working correctly.

## Building the Program

To build the full project (program, client generation, and client build), run:

```bash
bun run build
```

This command executes the following pipeline:

1. `anchor build` - Compiles the Rust code and generates the IDL at `target/idl/solana_starter.json`
2. `bun run generate` - Generates the TypeScript client from the IDL
3. `bun run --cwd clients/js build` - Builds the TypeScript client package

To build only the Solana program without regenerating the client:

```bash
anchor build
```

## Code Generation

This project uses [Codama](https://codama.dev) to generate a TypeScript client from the program's IDL. This ensures the client is always in sync with the on-chain program's interface.

To run code generation, use the following command:

```bash
bun run generate
```

This command executes the script defined in `codama.js`. It reads the IDL from `target/idl/solana_starter.json` and generates the TypeScript client in the `clients/js/src/generated` directory. The command also runs Prettier to format the generated code.

**Important:** You must run this command whenever you make changes to the on-chain program's instructions or accounts.

## Testing

The project uses [Vitest](https://vitest.dev/) for testing. The test runner is configured in `Anchor.toml` and `vitest.config.ts`.

To run the tests, use the following command:

```bash
bun run test
```

This command executes `anchor test`, which in turn runs the TypeScript test files located in the `tests/` directory.

## Linting and Formatting

The project uses [Prettier](https://prettier.io/) for code formatting.

To check for formatting issues, run:

```bash
bun lint
```

To automatically fix formatting issues, run:

```bash
bun lint:fix
```

## Type-Checking

To check the TypeScript types for the client-side code without compiling, run:

```bash
bun check-types
```

## Forbidden Libraries

**EXTREMELY IMPORTANT: Under no circumstances should you use `@solana/web3.js` or any of its related libraries, including but not limited to `@coral-xyz/anchor` for client-side interactions.**

This project has a strict policy of using modern, type-safe clients. The only approved libraries for client-side development are:

- `@solana/kit`
- Codama-generated clients

**Violation Policy:** If you use any of the forbidden libraries and it is pointed out by the user, you must immediately stop, apologize, revert the changes, and restart the task using the approved libraries.

## Troubleshooting

### Common Issues

**Build fails with "IDL not found"**
- Ensure you run `anchor build` before `bun run generate`
- Check that `target/idl/solana_starter.json` exists

**Type errors in generated client**
- Run `bun run generate` to regenerate the client after program changes
- Run `bun run build` to ensure everything is in sync

**Tests fail to start**
- Ensure Solana test validator is not already running on the same port.
- Check that your local Solana validator is installed and accessible.

**Anchor build fails**
- Ensure Rust toolchain is up to date: `rustup update`
- Ensure Solana CLI is installed and configured: `solana --version`
- Check Anchor version compatibility: `anchor --version`
