import { PinataSDK } from "pinata-web3";

export const Pinata = new PinataSDK({
  pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT,
});

export default async function useUpload(File) {
  try {
    return await Pinata.upload.file(File);
  } catch (error) {
    console.log("error in uploading file", error);
  }
}
