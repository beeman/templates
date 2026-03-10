import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    hookTimeout: 30_000, // TODO: Figure out why tests need so long. Seems like they're using the finalized commitment
    testTimeout: 30_000, // TODO: Figure out why tests need so long. Seems like they're using the finalized commitment
  },
})
