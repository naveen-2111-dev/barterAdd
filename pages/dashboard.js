import { useContract } from "@/contract/hooks/useContract";
import { ethers } from "ethers";
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
      args = [];
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
