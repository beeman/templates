#!/usr/bin/env bun

import { createSolanaClient } from './index.ts'

async function main() {
  const url = process.argv[2] ?? process.env.SOLANA_ENDPOINT ?? 'https://api.devnet.solana.com'
  const client = createSolanaClient({ url })

  const slot = await client.rpc.getSlot().send()
  console.log(`Connected to ${url} — current slot: ${slot}`)
}

main()
