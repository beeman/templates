import { expect, test } from 'bun:test'
import { createSolanaClient, getExplorerUrl } from '../src/index.ts'

test('createSolanaClient returns a client with rpc and rpcSubscriptions', () => {
  const client = createSolanaClient({ url: 'https://api.devnet.solana.com' })

  expect(client.rpc).toBeDefined()
  expect(client.rpcSubscriptions).toBeDefined()
})

test('createSolanaClient derives WebSocket URL from HTTP URL', () => {
  const client = createSolanaClient({ url: 'https://api.devnet.solana.com' })

  expect(client.rpcSubscriptions).toBeDefined()
})

test('getExplorerUrl returns correct URL for devnet', () => {
  const url = getExplorerUrl('tx/abc123', 'devnet')

  expect(url).toBe('https://explorer.solana.com/tx/abc123?cluster=devnet')
})

test('getExplorerUrl returns correct URL for mainnet-beta (no cluster param)', () => {
  const url = getExplorerUrl('account/abc123', 'mainnet-beta')

  expect(url).toBe('https://explorer.solana.com/account/abc123')
})
