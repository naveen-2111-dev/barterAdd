import { useContract } from "@/contract/hooks/useContract";
import addProduct from "@/contract/services/AddProducts";
import { useEffect, useState } from "react";

export default function AddProducts() {
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
    if (!executeTransaction) {
      console.error("Contract function is not available yet.");
      return;
    }

    await addProduct(
      executeTransaction,
      "0.1",
      10,
      "Laptop",
      "image.jpg",
      "A cool laptop",
      "Electronics",
      "New"
    );
  };

  return (
    <div>
      <button onClick={callContractFunction} disabled={!executeTransaction}>
        Call Contract with Static Values
      </button>
    </div>
  );
}
