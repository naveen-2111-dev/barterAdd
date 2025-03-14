// import { useWalletClient } from "wagmi";
// import { useMemo } from "react";
// import { createPublicClient, getContract, http } from "viem";
// import { sepolia } from "viem/chains";
// import contractMetadata from "@/contract/Abi.json";

// export function useInstance() {
//   const { data: walletClient } = useWalletClient();

//   return useMemo(() => {
//     if (!walletClient) return null;

//     const PublicClient = createPublicClient({
//       chain: sepolia,
//       transport: http(
//         `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_ID}`
//       ),
//     });

//     if (!contractMetadata.contractAddress || !contractMetadata.abi) {
//       console.error("Contract address or ABI is missing");
//       return null;
//     }

//     return getContract({
//       address: contractMetadata.contractAddress,
//       abi: contractMetadata.abi,
//       client: {
//         public: PublicClient,
//         wallet: walletClient,
//       },
//     });
//   }, [walletClient]);
// }
