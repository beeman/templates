export type SolanaCluster = 'devnet' | 'mainnet-beta' | 'testnet'

export type ExplorerPath = `account/${string}` | `block/${string}` | `tx/${string}`

export function getExplorerUrl(path: ExplorerPath, cluster: SolanaCluster = 'devnet'): string {
  const base = 'https://explorer.solana.com'
  const clusterParam = cluster === 'mainnet-beta' ? '' : `?cluster=${cluster}`

  return `${base}/${path}${clusterParam}`
}
