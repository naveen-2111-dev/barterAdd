import { useContract } from "@/contract/hooks/useContract";
import { useInstance } from "@/contract/hooks/useInstance";
import { useEffect, useState } from "react";

export default function GetMyProducts() {
  const [executeTransaction, setExecuteTransaction] = useState(null);
  const [product, setProduct] = useState([]);
  const [Count, setCount] = useState(null);

  useEffect(() => {
    const fetchContractFunction = async () => {
      const contractFunction = await useContract({
        functionName: "getProduct",
      });
      setExecuteTransaction(() => contractFunction);
    };

    fetchContractFunction();
  }, []);

  useEffect(() => {
    const ProductCount = async () => {
      const contract = await useInstance();
      const res = Number(await contract.ProductCount());
      setCount(res);
    };
    ProductCount();
  }, []);

  const callContractFunction = async () => {
    if (!executeTransaction) {
      console.error("Contract function is not available yet.");
      return;
    }

    const fetchedProducts = [];

    for (let i = 1; i <= Count; i++) {
      try {
        const product = await executeTransaction(i);
        fetchedProducts.push(product);
        console.log(product);
      } catch (error) {
        console.error(`Error fetching product ID ${i}:`, error);
      }
    }

    setProduct(fetchedProducts);
  };

  return (
    <div>
      {product}
      <button onClick={callContractFunction} disabled={!executeTransaction}>
        get My Products
      </button>
    </div>
  );
}
