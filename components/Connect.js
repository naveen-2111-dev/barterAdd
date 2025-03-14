"use client";

import { useState, useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import { Loader2, Wallet } from "lucide-react";

export default function ConnectButton() {
  const { connectors, connect, error, isPending } = useConnect();
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);

  const metaMaskConnector = connectors.find(
    (connector) => connector.id === "injected"
  );

  useEffect(() => {
    if (isConnected) {
      setLoading(false);
    }
  }, [isConnected]);

  return (
    <div className="flex justify-center items-center h-screen">
      {isConnected ? (
        <div className="px-6 py-3 rounded-xl bg-green-600 text-white flex items-center gap-2 shadow-lg">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
      ) : (
        <button
          onClick={() => {
            if (metaMaskConnector) {
              setLoading(true);
              connect({ connector: metaMaskConnector }).catch(() =>
                setLoading(false)
              );
            }
          }}
          className="px-6 py-3 rounded-xl neonGreen text-black flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-50"
          disabled={isPending || !metaMaskConnector}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Wallet className="w-5 h-5" />
          )}
          {loading ? "Connecting..." : "Connect MetaMask"}
        </button>
      )}

      {error && (
        <p className="text-red-400 text-center mt-3">{error.message}</p>
      )}
    </div>
  );
}
