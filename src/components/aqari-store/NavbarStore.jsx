import React from "react";
import logo from "../../assets/aqari_top_white.png";
import { Search } from "lucide-react";

export default function NavbarStore({
  searchQuery = "",
  onSearchChange = () => {},
}) {
  return (
    <nav className="w-full bg-gradient-to-b from-[#1F3C88] to-[#18346F] px-4 sm:px-6 py-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* LEFT */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:justify-start xl:gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-16 object-contain"
            />
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[16px] font-medium text-white">
              العقارات
            </h3>
            <p className="mt-1 text-[14px] text-white">
              تسوق حيث يمكنك ايجاد ما تريده
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex h-11 w-full lg:w-[430px] items-center rounded-xl border border-[#E5E7EB] bg-white px-2">
            <div className="flex flex-1 items-center gap-2 px-2">
              <Search size={16} className="text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="ابحث عن العقار، او الموقع"
                className="w-full bg-transparent text-[12px] text-[#374151] outline-none placeholder:text-[#9CA3AF]"
              />
            </div>

            <div className="mx-2 h-6 w-px bg-[#E5E7EB]" />

            <button
              type="button"
              className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-gradient-to-b from-[#1F3C88] to-[#18346F] px-4 text-[13px] font-medium text-white shadow-sm transition"
            >
              ابحث
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}