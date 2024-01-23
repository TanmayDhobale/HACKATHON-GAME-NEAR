import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import { NearWalletConnector } from "../NearWalletConnector";
import '../shims'

export default function ConnectWallet() {
  const MintbaseWalletSetup = {
    contractAddress: "hellovirtualworld.mintspace2.testnet",
    network: "testnet",
    callbackUrl: "http://localhost:3000",
  };

  return (
      <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
        <main className="flex flex-col items-center justify-center mt-2">
          <NearWalletConnector />
        </main>
      </MintbaseWalletContextProvider>
  );
}
