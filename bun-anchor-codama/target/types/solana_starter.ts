/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solana_starter.json`.
 */
export type SolanaStarter = {
  address: '3Cd4yg5VeMW1vHiNeKd7scc5AiuUjUU5C6CGZDszWxbg'
  metadata: {
    name: 'solanaStarter'
    version: '0.1.0'
    spec: '0.1.0'
    description: 'Created with Anchor'
  }
  instructions: [
    {
      name: 'initialize'
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237]
      accounts: []
      args: []
    },
  ]
  errors: [
    {
      code: 6000
      name: 'customError'
      msg: 'Custom error message'
    },
    {
      code: 6001
      name: 'invalidName'
      msg: 'Invalid name, must be 32 characters or less.'
    },
    {
      code: 6002
      name: 'maxNodesReached'
      msg: 'Maximum number of nodes reached for this operator.'
    },
    {
      code: 6003
      name: 'cannotDowngrade'
      msg: 'Cannot downgrade to a lower tier client.'
    },
    {
      code: 6004
      name: 'alreadyAtTier'
      msg: 'Already at this client tier.'
    },
    {
      code: 6005
      name: 'insufficientTokens'
      msg: 'Insufficient TPS tokens to upgrade.'
    },
    {
      code: 6006
      name: 'noYieldToHarvest'
      msg: 'No yield to harvest yet.'
    },
    {
      code: 6007
      name: 'invalidNodeIndex'
      msg: 'Invalid node index.'
    },
    {
      code: 6008
      name: 'arithmeticOverflow'
      msg: 'Arithmetic overflow in yield calculation.'
    },
    {
      code: 6009
      name: 'unauthorized'
      msg: 'Unauthorized: Only the operator authority can perform this action.'
    },
  ]
  constants: [
    {
      name: 'seed'
      type: 'string'
      value: '"anchor"'
    },
  ]
}
