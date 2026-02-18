export default {
  idl: './target/idl/solana_starter.json',
  scripts: {
    js: {
      from: '@codama/renderers-js',
      args: ['clients/js/src/generated'],
    },
  },
}
