// import { useEffect, useState } from "react";
// import { useInstance } from "./useInstance";

// export function useContract({ functionName, args }) {
//   const contract = useInstance(); // ✅ Call another hook inside this hook

//   const executeTransaction = async () => {
//     if (!contract) {
//       console.error("Contract is not initialized yet");
//       return;
//     }

//     try {
//       if (
//         !contract[functionName] ||
//         typeof contract[functionName] !== "function"
//       ) {
//         throw new Error("Function name undefined!!!");
//       }

//       const tx = await contract[functionName](...args);
//       await tx.wait();

//       console.log("Transaction:", tx);
//     } catch (error) {
//       console.error("Contract call error:", error);
//     }
//   };

//   return executeTransaction; // ✅ Return the function for execution
// }
