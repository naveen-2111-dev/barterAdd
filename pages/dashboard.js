import { useContract } from "@/contract/hooks/useContract";
import { ethers } from "ethers";

export default function Dashboard() {
  // const callContractFunction = async () => {
  //   try {
  //     const args = [
  //       1000, // price (uint256)
  //       50, // stock (uint256)
  //       ethers.encodeBytes32String("Laptop"), // name (bytes32)
  //       ethers.toUtf8Bytes("QmXoypizjW3WknFiJnklk3aJsuTydyVYJcsRU4yFo3hE3A"), // IPFS hash (bytes)
  //       ethers.toUtf8Bytes("A high-performance laptop"), // description (bytes)
  //       ethers.encodeBytes32String("Electronics"), // productType (bytes32)
  //       ethers.encodeBytes32String("New"), // condition (bytes32)
  //     ];

  //     const res = useContract({ functionName: "addProduct", args });
  //     console.log("Contract function called successfully");
  //   } catch (error) {
  //     console.error("Error calling contract:", error);
  //   }
  // };

  return (
    <div>
      <button>Call Contract with Static Values</button>
    </div>
  );
}
