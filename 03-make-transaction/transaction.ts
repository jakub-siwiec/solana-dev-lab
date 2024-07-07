import "dotenv/config"
import { Connection, clusterApiUrl, Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const senderKeypair = getKeypairFromEnvironment("MY_SECRET_KEY");

const transaction = new Transaction()

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const sender = new PublicKey(senderKeypair.publicKey.toBase58())
const recipient = new PublicKey("B1GgFFBUskg7rqw7VuA5WVEv3SLQmgAYVYn2TW86Fke4")
const amount = 0.02

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: recipient,
  lamports: LAMPORTS_PER_SOL * amount
})

transaction.add(sendSolInstruction)

const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [senderKeypair]
)

console.log(signature)