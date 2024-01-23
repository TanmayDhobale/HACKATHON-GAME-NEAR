import { useMbWallet } from "@mintbase-js/react";

export const NearWalletConnector = () => {
  const { isConnected, selector, connect , activeAccountId } = useMbWallet();


  const handleSignout = async () => {
    const wallet = await selector.wallet();
    return wallet.signOut();
  };

  const handleSignIn = async () => {
    return connect();
  };

  // if (!isConnected) {
  //   return <button  className="bg-[#6774FD] text-white font-extrabold rounded text-xl p-3 hover:bg-[#e1e1e1]" onClick={handleSignIn}>Connect NEAR Wallet</button>;
  // }

  if (!isConnected) {
    return <button className="overflow-hidden rounded-full bg-[#6774FD] p-3 text-xl shadow">
    <span onClick={handleSignIn}>Connect Wallet</span>
  </button>
  }

  return (
    <div>
      <div className="bg-[#6774FD] text-[#FCEA2B] rounded p-3 font-extrabold text-xl">
        {activeAccountId}{" "}
        <button className="group relative overflow-hidden rounded-full bg-red-400 p-3 text-lg shadow">
          <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[550ms] ease-out group-hover:w-full"></div>
          <span className="relative text-white" onClick={handleSignout}>Disconnect</span>
        </button>
      </div>
    </div>
  );
};
