import { useEffect } from "react";
import { ethers } from "ethers";
import Abi from "@/contract/Abi.json";

export default function Dashboard() {
  const AddProd = async () => {
    const provider = "haha"
    const contract = new ethers.Contract(
      Abi.contractAddress,
      Abi.abi,
      provider
    );
    // console.log(Abi);
  };

  useEffect(() => {
    AddProd();
  }, []);
  return <div>dashboard</div>;
}
