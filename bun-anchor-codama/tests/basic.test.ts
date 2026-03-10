import { getInitializeInstruction } from '../clients/js/src/generated'
import { createDefaultLocalhostRpcClient } from '@solana/kit-plugins'
import { sendAndConfirm } from './helpers'

describe('basic', async () => {
  it('should run the programs initialize function', async () => {
    // ARRANGE
    expect.assertions(2)
    const client = await createDefaultLocalhostRpcClient()
    const ix = getInitializeInstruction()

    // ACT
    const sx = await sendAndConfirm({ client, ix })

    // ASSERT
    expect(sx).toBeDefined()
    expect(sx).toBeDefined()
  })
})
