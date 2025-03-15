import { useContract } from "@/contract/hooks/useContract";
import { ethers, parseEther } from "ethers";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [executeTransaction, setExecuteTransaction] = useState(null);

  useEffect(() => {
    const fetchContractFunction = async () => {
      const contractFunction = await useContract({
        functionName: "addProduct",
      });
      setExecuteTransaction(() => contractFunction);
    };

    fetchContractFunction();
  }, []);

  const callContractFunction = async () => {
    try {
      const args = [
        ethers.parseUnits("3", 18),
        2,
        ethers.encodeBytes32String("laptop"),
        ethers.toUtf8Bytes("ImageDataHere"),
        ethers.toUtf8Bytes("This is a product description."),
        ethers.encodeBytes32String("Electronics"),
        ethers.encodeBytes32String("New"),
      ];
      const res = await executeTransaction(...args);
      console.log("Contract function executed successfully", res);
    } catch (error) {
      console.error("Error calling contract:", error);
    }
  };

  return (
    <div>
      <button onClick={callContractFunction} disabled={!executeTransaction}>
        Call Contract with Static Values
      </button>
    </div>
  );
}
