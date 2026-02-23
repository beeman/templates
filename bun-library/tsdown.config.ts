import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/cli.ts', 'src/index.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
})
