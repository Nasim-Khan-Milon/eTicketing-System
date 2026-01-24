"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <nav className="w-full h-[70px] border-b bg-white">
        <div className="flex items-center justify-between h-full px-5">

          <div className="flex items-center gap-2">
            <Image
              src="/logo.avif"
              alt="TiketBus.id Logo"
              width={80}
              height={40}
              priority
            />
            <h1 className="text-xl font-bold text-blue-600">
              TiketBus.id
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/"><li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
            <Link href="/book-ticket"><li className="hover:text-blue-600 cursor-pointer">Book Ticket</li></Link>
            <Link href="/bus-schedule"><li className="hover:text-blue-600 cursor-pointer">Bus Schedule</li></Link>
            <Link href="/help"><li className="hover:text-blue-600 cursor-pointer">Help</li></Link>
          </ul>

          <div className="flex items-center gap-4">
            <button className="h-9 px-6 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              onClick={() => router.push('/login')}
            >
              Login
            </button>

            <button className="h-9 px-6 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              onClick={() => router.push('/register')}
            >
              Sign Up
            </button>

            <button
              aria-label="Open menu"
              onClick={() => setShowMenu(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <span className="block w-5 h-[2px] bg-gray-800 mb-1"></span>
              <span className="block w-5 h-[2px] bg-gray-800 mb-1"></span>
              <span className="block w-5 h-[2px] bg-gray-800"></span>
            </button>
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="fixed inset-0 z-30 flex items-center justify-center md:hidden">
          
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowMenu(false)}
          />

          {/* Modal */}
          <div className="relative z-40 w-[90%] max-w-sm bg-white rounded-xl shadow-lg p-6">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-blue-600">
                Menu
              </h2>
              <button
                aria-label="Close menu"
                onClick={() => setShowMenu(false)}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-4 text-center text-gray-700 font-medium">
              <li onClick={() => setShowMenu(false)} className="cursor-pointer hover:text-blue-600">Home</li>
              <li onClick={() => setShowMenu(false)} className="cursor-pointer hover:text-blue-600">Book Ticket</li>
              <li onClick={() => setShowMenu(false)} className="cursor-pointer hover:text-blue-600">Bus Schedule</li>
              <li onClick={() => setShowMenu(false)} className="cursor-pointer hover:text-blue-600">Help</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
