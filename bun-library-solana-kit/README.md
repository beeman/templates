# bun-library-solana-kit

A modern TypeScript library template for Solana development using [`@solana/kit`](https://github.com/solana-labs/solana-web3.js). Built on top of the [bun-library](../bun-library) template with an opinionated Solana Kit client pre-configured.

## Features

- Everything from [bun-library](../bun-library) (Bun, TypeScript, Biome, tsup, Changesets, GitHub Actions)
- **Opinionated `@solana/kit` client** using `createEmptyClient().use(rpc(...))` plugin pattern
- **Explorer URL helper** for generating Solana Explorer links
- **Automatic WebSocket URL derivation** from HTTP RPC URL

## Getting Started

To use this template, run the following command:

```bash
bun x create-solana-dapp@latest -t gh:beeman/templates/bun-library-solana-kit
```

### Installation

```bash
bun install
```

### Usage

```typescript
import { createSolanaClient, getExplorerUrl } from 'bun-library-solana-kit'

// Create a client with your RPC URL
const client = createSolanaClient({ url: 'https://api.devnet.solana.com' })

// Use the RPC client
const slot = await client.rpc.getSlot().send()
console.log(`Current slot: ${slot}`)

// Generate explorer URLs
const url = getExplorerUrl('tx/your-signature', 'devnet')
```

### CLI

```bash
# Check connectivity (defaults to devnet)
bun run src/cli.ts

# Specify a custom RPC URL
bun run src/cli.ts https://api.mainnet-beta.solana.com
```

### Development

- **Build**: `bun run build`
- **Type Check**: `bun run check-types`
- **Lint**: `bun run lint`
- **Lint & Fix**: `bun run lint:fix`
- **Test**: `bun test`
- **Test (Watch Mode)**: `bun run test:watch`

## Project Structure

```
.
├── src/
│   ├── lib/
│   │   ├── get-client.ts        # Kit client factory (createEmptyClient + rpc plugin)
│   │   └── get-explorer-url.ts  # Explorer URL helper
│   ├── cli.ts                   # CLI entry point
│   └── index.ts                 # Library exports
├── test/
│   └── index.test.ts            # Unit tests
└── ... (config files)
```

## License

MIT – see [LICENSE](./LICENSE).
