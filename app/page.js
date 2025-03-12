import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
          Welcome to <span className="text-lime-400">BarterX</span>
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight sm:leading-[4.5rem] md:leading-[5rem]">
          Take your NFTs to the next level
        </h2>

        <p className="text-md sm:text-xl md:text-2xl text-gray-300 mt-4 sm:mt-7 leading-normal sm:leading-relaxed max-w-5xl">
          Exchange your NFTs for BarterX tokens and shop for physical products.
          <br className="hidden md:block" /> A seamless bridge between digital
          assets and real-world value! 🔥
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12">
          <button className="w-full max-w-[260px] sm:max-w-[280px] bg-lime-400 text-black font-bold px-8 py-4 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-lg sm:text-lg transition-all hover:scale-105">
            Connect
            <Image src="/Metamask.png" alt="Metamask" width={24} height={24} />
          </button>
          <button className="w-full max-w-[260px] sm:max-w-[280px] bg-lime-400 text-black font-bold px-8 py-4 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-lg sm:text-lg transition-all hover:scale-105">
            Explore <span>🚀</span>
          </button>
        </div>
      </div>
    </div>
  );
}
