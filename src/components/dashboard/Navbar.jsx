import React from "react";
import { Bell, Search, User } from "lucide-react";
import logo from "../../assets/aqari_top_white.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-b from-[#1F3C88] to-[#18346F] px-6 md:px-10 lg:px-14">
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Aqari Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden flex-1 justify-center px-6 md:flex">
          <div className="relative w-full max-w-[420px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full bg-white/95 py-3 pl-10 pr-4 text-[15px] text-gray-700 outline-none shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-white/40"
            />
          </div>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4 md:gap-5">
          <h2 className="text-[18px] font-bold text-white/90 md:text-[20px]">
            أهلا بك ، <span className="text-white">Ahmed Saeed</span>
          </h2>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20">
            <Bell size={19} />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/25">
            <User size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}