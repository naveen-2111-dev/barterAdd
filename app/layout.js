import StoreProvider from "./StoreProvider";
import "@/app/globals.css";
import { WalletProvider } from "./WalletProvider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";

export const metadata = {
  title: "BarterX product dashboard",
  description: "add your products and let users can buy it",
};

export default async function RootLayout({ children }) {
  const cookieHeader = await headers();
  const initialState = cookieToInitialState(config, cookieHeader.get("cookie"));
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <WalletProvider initialState={initialState}>
          <StoreProvider>{children}</StoreProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
