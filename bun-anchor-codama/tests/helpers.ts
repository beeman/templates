import { createDefaultLocalhostRpcClient } from '@solana/kit-plugins'
import {
  appendTransactionMessageInstructions,
  assertIsTransactionWithBlockhashLifetime,
  createTransactionMessage,
  getSignatureFromTransaction,
  Instruction,
  pipe,
  sendAndConfirmTransactionFactory,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionMessageWithSigners,
} from '@solana/kit'

export async function sendAndConfirm({
  client,
  ix,
}: {
  client: Awaited<ReturnType<typeof createDefaultLocalhostRpcClient>>
  ix: Instruction | Instruction[]
}) {
  const latestBlockhash = await client.rpc
    .getLatestBlockhash()
    .send()
    .then(({ value }) => value)
  const sendAndConfirmTransaction = sendAndConfirmTransactionFactory(client)
  const tx = pipe(
    createTransactionMessage({ version: 0 }),
    (tx) => setTransactionMessageFeePayerSigner(client.payer, tx),
    (tx) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, tx),
    (tx) => appendTransactionMessageInstructions(Array.isArray(ix) ? ix : [ix], tx),
  )

  const signedTransaction = await signTransactionMessageWithSigners(tx)
  assertIsTransactionWithBlockhashLifetime(signedTransaction)
  await sendAndConfirmTransaction(signedTransaction, { commitment: 'confirmed' })
  return getSignatureFromTransaction(signedTransaction)
}
