import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import type { LocalSolanaClient } from '@beeman/testcontainers'
import { createLocalSolanaClient, type StartedSurfpoolContainer, SurfpoolContainer } from '@beeman/testcontainers'
import { generateKeyPairSigner, lamports } from '@solana/kit'

/**
 * E2E tests using Surfpool via testcontainers.
 *
 * These tests spin up a Surfpool container (Solana simulator) and run
 * real RPC calls against it. Requires Docker to be running.
 *
 * To use solana-test-validator instead of Surfpool, replace:
 *   import { SurfpoolContainer } from '@beeman/testcontainers'
 * with:
 *   import { SolanaTestValidatorContainer } from '@beeman/testcontainers'
 * and change `new SurfpoolContainer()` to `new SolanaTestValidatorContainer()`.
 * The client API is identical.
 */
describe('e2e: Surfpool', () => {
  let container: StartedSurfpoolContainer
  let client: LocalSolanaClient

  beforeAll(async () => {
    container = await new SurfpoolContainer().start()
    client = await createLocalSolanaClient({ container })
  }, 120_000)

  afterAll(async () => {
    await container.stop()
  })

  it('should respond to getHealth', async () => {
    const result = await client.rpc.getHealth().send()

    expect(result).toBe('ok')
  })

  it('should respond to getVersion', async () => {
    const result = await client.rpc.getVersion().send()

    expect(result).toHaveProperty('solana-core')
    expect(result).toHaveProperty('feature-set')
  })

  it('should respond to getSlot', async () => {
    const result = await client.rpc.getSlot().send()

    expect(typeof result).toBe('bigint')
    expect(result).toBeGreaterThanOrEqual(0)
  })

  it('should get balance of a new keypair (0 SOL)', async () => {
    const keypair = await generateKeyPairSigner()
    const result = await client.rpc.getBalance(keypair.address).send()

    expect(result.value).toEqual(lamports(0n))
  })
})
