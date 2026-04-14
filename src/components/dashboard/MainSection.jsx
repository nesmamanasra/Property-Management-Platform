import { supabase } from "../../lib/supabase";
import React, { useEffect } from "react";
import { CalendarDays, Download, Home, Building2 } from "lucide-react";

const stats = [
  {
    title: "إجمالي الدخل",
    value: "$ 3,228,278",
    decimal: ".05",
    change: "10%",
    trend: "up",
    subtitle: "مقارنة بالأسبوع الماضي",
    compare: "$2,734,134.05",
    icon: "◉",
    color: "text-[#4F7CFF]",
    bg: "bg-[#EEF4FF]",
  },
  {
    title: "إجمالي المصروفات",
    value: "$ 3,228,278",
    decimal: ".05",
    change: "10%",
    trend: "down",
    subtitle: "مقارنة بالأسبوع الماضي",
    compare: "$2,734,134.05",
    icon: "◉",
    color: "text-[#A855F7]",
    bg: "bg-[#F5EDFF]",
  },
  {
    title: "الوحدات المباعة",
    value: "$ 3,228,278",
    decimal: ".05",
    change: "10%",
    trend: "up",
    subtitle: "مقارنة بالأسبوع الماضي",
    compare: "$2,734,134.05",
    icon: "◉",
    color: "text-[#22C55E]",
    bg: "bg-[#EAFBF0]",
  },
  {
    title: "مشاهدات العقارات",
    value: "$ 3,228,278",
    decimal: ".05",
    change: "10%",
    trend: "up",
    subtitle: "مقارنة بالأسبوع الماضي",
    compare: "$2,734,134.05",
    icon: "◉",
    color: "text-[#F59E0B]",
    bg: "bg-[#FFF6E8]",
  },
];

function StatCard({ item }) {
  return (
    <div className="rounded-2xl border border-[#ECEEF2] bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.04)] sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 text-right">
          <p className={`mb-1 text-[11px] sm:text-[12px] font-semibold ${item.color}`}>
            {item.title}
          </p>

          <div className="flex items-end justify-end gap-1">
            <span className="mb-[2px] text-[13px] sm:text-[16px] font-semibold text-[#6B7280]">
              {item.decimal}
            </span>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold leading-none text-[#1F2937] break-words">
              {item.value}
            </h3>
          </div>
        </div>

        <div
          className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg text-sm ${item.bg} ${item.color}`}
        >
          {item.icon}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2 text-[11px] sm:text-[12px] text-right">
        <span
          className={`font-semibold ${
            item.trend === "up" ? "text-[#22C55E]" : "text-[#EF4444]"
          }`}
        >
          {item.change} {item.trend === "up" ? "↗" : "↘"}
        </span>
        <span className="text-[#9CA3AF]">{item.subtitle}</span>
        <span className="font-medium text-[#4B5563]">{item.compare}</span>
      </div>
    </div>
  );
}

export default function MainSection() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("properties").select("*");
      console.log(data);
      console.log(error);
    };

    testConnection();
  }, []);

  return (
    <section className="bg-[#F7F8FA] p-3 sm:p-4 md:p-6" dir="rtl">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5 sm:mb-6 flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-start">
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] shadow-sm transition hover:bg-[#f9fafb]">
              <CalendarDays size={16} />
              الشهر الماضي
            </button>

            <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] shadow-sm transition hover:bg-[#f9fafb]">
              <Download size={16} />
              تصدير
            </button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="rounded-2xl border border-[#ECEEF2] bg-white p-4 sm:p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
            <h3 className="mb-4 text-right text-base sm:text-lg font-semibold text-[#1F2937]">
              أكثر الوحدات طلباً
            </h3>

            <div className="mb-5 rounded-2xl border border-[#F0E7CF] bg-[#FFF8E8] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-white p-2 text-[#F59E0B] shadow-sm shrink-0">
                  ✦
                </div>
                <p className="text-right text-sm leading-6 text-[#4B5563]">
                  احصل على تحليل أعمق من خلال اشتراك مميز
                </p>
              </div>
            </div>

            <div className="mb-4 text-right">
              <div className="flex items-end justify-end gap-2">
                <span className="text-xs sm:text-sm text-[#9CA3AF]">وحدة</span>
                <h4 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold leading-none text-[#1F2937]">
                  28,278
                </h4>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-[#9CA3AF]">
                تم بيعها على مدار الوقت
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-[#1F2937] text-sm sm:text-base">
                  16,978
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-[15px] text-[#374151]">منزل</span>
                  <Home size={16} className="text-[#4F7CFF]" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-[#1F2937] text-sm sm:text-base">
                  7,548
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-[15px] text-[#374151]">شقة</span>
                  <Building2 size={16} className="text-[#4F7CFF]" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-[#1F2937] text-sm sm:text-base">
                  4,278
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-[15px] text-[#374151]">فيلا</span>
                  <Building2 size={16} className="text-[#4F7CFF]" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#ECEEF2] bg-white p-4 sm:p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
              <div className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-xs sm:text-sm text-[#374151]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4F7CFF]" />
                278 عقار تم بيعه
              </div>

              <div className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-xs sm:text-sm text-[#374151]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                328 عقار للإيجار
              </div>
            </div>

            <div className="relative mt-4 h-[260px] sm:h-[300px] md:h-[320px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-t border-[#EEF1F5]"
                    style={{ top: `${i * 25}%` }}
                  />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-2 px-2 sm:px-4 text-[9px] sm:text-xs text-[#9CA3AF]">
                {[
                  "يناير",
                  "فبراير",
                  "مارس",
                  "أبريل",
                  "مايو",
                  "يونيو",
                  "يوليو",
                  "أغسطس",
                  "سبتمبر",
                  "أكتوبر",
                  "نوفمبر",
                  "ديسمبر",
                ].map((month) => (
                  <span key={month} className="truncate">
                    {month}
                  </span>
                ))}
              </div>

              <svg
                viewBox="0 0 1000 320"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M20 130 C80 210,140 80,200 120 S320 130,380 100 S500 260,560 180 S680 90,740 140 S860 180,980 120"
                  fill="none"
                  stroke="#4F7CFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M20 160 C90 90,150 180,220 120 S340 70,420 140 S540 60,620 190 S760 100,840 130 S920 50,980 150"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}