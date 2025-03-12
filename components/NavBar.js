"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex poppins-bold justify-between items-center p-4 shadow-2xl shadow-gray-950 bg-black text-white relative">
      <div>
        <Image src="/Logo.png" alt="logo" width={100} height={100} />
      </div>

      <div className="hidden md:flex poppins-regular gap-7 text-lg cursor-pointer">
        <h1>Home</h1>
        <h1>Explore</h1>
        <h1>Rules</h1>
        <h1>Contact</h1>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex justify-center items-center">
          <Image src="/skull.png" alt="barterX" width={45} height={40} />
          <h1>20 BRTX</h1>
        </div>

        <button className="hidden md:flex text-black pr-3 p-2 pl-3 rounded-lg neonGreen justify-center items-center gap-3">
          Connect
          <Image src="/Metamask.png" alt="metamask" width={20} height={20} />
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-4 py-5 shadow-xl md:hidden">
          <h1 onClick={() => setIsOpen(false)}>Home</h1>
          <h1 onClick={() => setIsOpen(false)}>Explore</h1>
          <h1 onClick={() => setIsOpen(false)}>Rules</h1>
          <h1 onClick={() => setIsOpen(false)}>Contact</h1>
        </div>
      )}
    </nav>
  );
}
