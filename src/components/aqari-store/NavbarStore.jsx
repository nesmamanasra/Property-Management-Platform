import React from "react";
import logo from "../../assets/aqari_top_white.png";
import { ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NavbarStore() {
  const navigate = useNavigate();

  return (
    <nav className="relative w-full overflow-hidden bg-gradient-to-br from-[#1F3C88] via-[#1B3778] to-[#18346F] px-4 sm:px-6 lg:px-10">
      {/* خلفيات جمالية */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute right-10 top-6 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-emerald-300/10 blur-2xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
        {/* القسم الأيسر */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/10 p-2 shadow-lg ring-1 ring-white/15 backdrop-blur-md">
            <img
              src={logo}
              alt="Aqari"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] sm:text-xs text-white/85 backdrop-blur-md">
              <Home size={14} />
              Aqari Store
            </div>

            <h1 className="text-[22px] font-bold tracking-wide text-white sm:text-[28px]">
              تفاصيل العقار
            </h1>

            <p className="mt-1 max-w-[520px] text-[13px] leading-6 text-white/80 sm:text-[14px]">
              اكتشف كافة تفاصيل العقار بدقة، واطلع على الوصف والمعلومات الكاملة
              بطريقة أنيقة وواضحة.
            </p>
          </div>
        </div>

        {/* القسم الأيمن */}
        <div className="flex items-center justify-start lg:justify-end">
          <button
            onClick={() => navigate("/aqari-store")}
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-[1px] hover:bg-white/20"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 transition group-hover:bg-white/25">
              <ArrowRight size={18} />
            </span>

            <div className="flex flex-col items-start text-right">
              <span className="text-[14px] font-semibold">العودة إلى المتجر</span>
              <span className="text-[11px] text-white/70">
                الرجوع إلى صفحة العقارات
              </span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}