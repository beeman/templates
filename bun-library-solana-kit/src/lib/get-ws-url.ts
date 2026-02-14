/**
 * Derive a WebSocket URL from an HTTP URL.
 *
 * `url.replace('http', 'ws')` correctly handles both protocols:
 * - `http://` → `ws://`
 * - `https://` → `wss://` (replaces first occurrence of 'http' → 'ws', leaving the 's')
 *
 * Also maps the default RPC port 8899 to the default WS port 8900.
 */
export function getWsUrl(url: string): string {
  return url.replace('http', 'ws').replace('8899', '8900')
}
