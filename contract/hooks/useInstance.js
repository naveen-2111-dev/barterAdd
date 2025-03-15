import contractMetadata from "@/contract/Abi.json";
import { ethers } from "ethers";

export async function useInstance() {
  if (!contractMetadata.contractAddress || !contractMetadata.abi) {
    console.error("Contract address or ABI is missing");
    return null;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new ethers.Contract(
    contractMetadata.contractAddress,
    contractMetadata.abi,
    signer
  );
}
