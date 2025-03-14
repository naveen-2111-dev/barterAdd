"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/config";
import { WagmiProvider } from "wagmi";
const queryClient = new QueryClient();

export function WalletProvider({ children, initialState }) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
