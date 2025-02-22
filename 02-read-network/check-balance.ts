import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const address = "GicSfC2wqBiRihYABqdH5xS2ayVAfcKkhAepVjyi3ww6"

try {

    const publicKey = new PublicKey(address);

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );

} catch (error) {

    console.error(error);

}



