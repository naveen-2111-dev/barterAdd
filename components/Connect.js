"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Loader2, Wallet } from "lucide-react";
import useConnect from "@/hooks/useConnect";
import { isConnected, disconnected } from "@/lib/features/Connect/ConnectSlice";
import {
  Connect_Address,
  Disconnect_address,
} from "@/lib/features/address/AddresSlice";

export default function ConnectButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const AddressConnecter = useSelector((state) => state.address.value);
  const isConnectedState = useSelector((state) => state.connected.value);
  const connect = useConnect();

  const handleConnect = useCallback(async () => {
    setLoading(true);
    try {
      const result = await connect();
      if (result && result.address) {
        dispatch(Connect_Address(result.address));
        dispatch(isConnected());
      } else {
        console.error("Failed to connect");
        dispatch(Disconnect_address());
        dispatch(disconnected());
      }
    } catch (error) {
      console.error("Error connecting:", error);
      dispatch(Disconnect_address());
      dispatch(disconnected());
    } finally {
      setLoading(false);
    }
  }, [dispatch, connect]);

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        console.log("Accounts changed:", accounts);
        if (accounts.length === 0) {
          dispatch(Disconnect_address());
          dispatch(disconnected());
        } else {
          dispatch(Connect_Address(accounts[0]));
          dispatch(isConnected());
        }
      };

      const handleDisconnect = () => {
        console.log("Metamask disconnected");
        dispatch(Disconnect_address());
        dispatch(disconnected());
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("disconnect", handleDisconnect);

      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("disconnect", handleDisconnect);
      };
    }
  }, [dispatch]);

  useEffect(() => {
    if (isConnectedState) {
      router.push("/dashboard");
    }
  }, [isConnectedState, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      {isConnectedState && AddressConnecter ? (
        <div className="px-6 py-3 rounded-xl bg-gray-800 text-white flex items-center gap-2 shadow-lg">
          Connected: {AddressConnecter.slice(0, 6)}...
          {AddressConnecter.slice(-4)}
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={loading}
          className="px-6 py-3 rounded-xl neonGreen text-black flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Wallet />}
          {loading ? "Connecting..." : "Connect"}
        </button>
      )}
    </div>
  );
}
