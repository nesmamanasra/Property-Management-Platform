import React from "react";
import {
  CalendarDays,
  Download,
  Home,
  Building2,
  Search,
  Printer,
  MoreHorizontal,
} from "lucide-react";

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

const transactions = [
  {
    id: "01",
    order: "#12345",
    customer: "Arlene McCoy",
    property: "Green Valley Estate",
    purchase: "شراء مدفوع",
    price: "$775,000",
    status: "ملغي",
  },
  {
    id: "02",
    order: "#67890",
    customer: "Marvin McKinney",
    property: "Silver Oak Residency",
    purchase: "إيجار مدفوع",
    price: "$580,000",
    status: "مكتمل",
  },
  {
    id: "03",
    order: "#23456",
    customer: "Jenny Wilson",
    property: "Blue Horizon Towers",
    purchase: "شراء مدفوع",
    price: "$910,000",
    status: "قيد الانتظار",
  },
  {
    id: "04",
    order: "#34567",
    customer: "Cody Fisher",
    property: "Sunrise Heights",
    purchase: "إيجار مدفوع",
    price: "$680,000",
    status: "مكتمل",
  },
  {
    id: "05",
    order: "#45678",
    customer: "Wade Warren",
    property: "Palm Grove Villas",
    purchase: "شراء مدفوع",
    price: "$600,000",
    status: "مكتمل",
  },
  {
    id: "06",
    order: "#56789",
    customer: "Bessie Cooper",
    property: "Riverfront Residency",
    purchase: "إيجار مدفوع",
    price: "$950,000",
    status: "قيد الانتظار",
  },
  {
    id: "07",
    order: "#67891",
    customer: "Darlene Robertson",
    property: "Golden Gate Apartments",
    purchase: "شراء مدفوع",
    price: "$700,000",
    status: "ملغي",
  },
];

function StatCard({ item }) {
  return (
    <div className="rounded-2xl border border-[#ECEEF2] bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
      <div className="mb-3 flex items-start justify-between">
        <div className="text-right">
          <p className={`mb-1 text-[11px] font-semibold ${item.color}`}>
            {item.title}
          </p>

          <div className="flex items-end justify-end gap-1">
            <span className="mb-[2px] text-[16px] font-semibold text-[#6B7280]">
              {item.decimal}
            </span>
            <h3 className="text-[28px] font-bold leading-none text-[#1F2937]">
              {item.value}
            </h3>
          </div>
        </div>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${item.bg} ${item.color}`}
        >
          {item.icon}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 text-[12px] text-right">
        <span className="font-medium text-[#4B5563]">{item.compare}</span>
        <span className="text-[#9CA3AF]">{item.subtitle}</span>
        <span
          className={`font-semibold ${
            item.trend === "up" ? "text-[#22C55E]" : "text-[#EF4444]"
          }`}
        >
          {item.change} {item.trend === "up" ? "↗" : "↘"}
        </span>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    مكتمل: "bg-[#EAFBF0] text-[#22C55E]",
    "قيد الانتظار": "bg-[#FFF7E8] text-[#F59E0B]",
    ملغي: "bg-[#FDECEC] text-[#EF4444]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function MainSection() {
  return (
    <section className="min-h-screen bg-[#F7F8FA] p-6" dir="rtl">
      <div className="mx-auto max-w-[1400px]">
        {/* Top Bar */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-start">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] shadow-sm transition hover:bg-[#f9fafb]">
              <CalendarDays size={16} />
              الشهر الماضي
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] shadow-sm transition hover:bg-[#f9fafb]">
              <Download size={16} />
              تصدير
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </div>

        {/* Middle Section */}
        <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          {/* Popular Unit */}
          <div className="rounded-2xl border border-[#ECEEF2] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
            <h3 className="mb-4 text-right text-lg font-semibold text-[#1F2937]">
              أكثر الوحدات طلباً
            </h3>

            <div className="mb-5 rounded-2xl border border-[#F0E7CF] bg-[#FFF8E8] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-white p-2 text-[#F59E0B] shadow-sm">
                  ✦
                </div>
                <p className="text-sm leading-6 text-[#4B5563] text-right">
                  احصل على تحليل أعمق من خلال اشتراك مميز
                </p>
              </div>
            </div>

            <div className="mb-4 text-right">
              <div className="flex items-end justify-end gap-2">
                <span className="text-sm text-[#9CA3AF]">وحدة</span>
                <h4 className="text-[34px] font-bold leading-none text-[#1F2937]">
                  28,278
                </h4>
              </div>
              <p className="mt-1 text-sm text-[#9CA3AF]">تم بيعها على مدار الوقت</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1F2937]">16,978</span>
                <div className="flex items-center gap-3">
                  <span className="text-[15px] text-[#374151]">منزل</span>
                  <Home size={16} className="text-[#4F7CFF]" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1F2937]">7,548</span>
                <div className="flex items-center gap-3">
                  <span className="text-[15px] text-[#374151]">شقة</span>
                  <Building2 size={16} className="text-[#4F7CFF]" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1F2937]">4,278</span>
                <div className="flex items-center gap-3">
                  <span className="text-[15px] text-[#374151]">فيلا</span>
                  <Building2 size={16} className="text-[#4F7CFF]" />
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-2xl border border-[#ECEEF2] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-4">
              <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4F7CFF]" />
                278 عقار تم بيعه
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                328 عقار للإيجار
              </div>
            </div>

            <div className="relative h-[320px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-t border-[#EEF1F5]"
                    style={{ top: `${i * 25}%` }}
                  />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-[#9CA3AF]">
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
                  <span key={month}>{month}</span>
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

        {/* Transaction Report */}
        <div className="rounded-2xl border border-[#ECEEF2] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
          <div className="flex flex-col gap-4 border-b border-[#EEF1F5] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-right text-lg font-semibold text-[#1F2937]">
              تقرير العمليات
            </h3>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2.5 text-sm text-[#9CA3AF]">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="بحث..."
                  className="w-full bg-transparent text-right outline-none placeholder:text-[#9CA3AF]"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] transition hover:bg-[#f9fafb]">
                <Download size={16} />
                تصدير
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] transition hover:bg-[#f9fafb]">
                <Printer size={16} />
                طباعة
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full">
              <thead>
                <tr className="border-b border-[#EEF1F5] bg-[#FCFCFD] text-right">
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الرقم
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    رقم الطلب
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    اسم العميل
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    اسم العقار
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    نوع العملية
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    السعر
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الحالة
                  </th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {transactions.map((item) => (
                  <tr
                    key={item.id}
                    className="group border-b border-[#F3F4F6] text-sm hover:bg-[#18346F]"
                  >
                    <td className="px-5 py-4 text-[#6B7280] group-hover:text-white">
                      {item.id}
                    </td>

                    <td className="px-5 py-4 font-medium text-[#374151] group-hover:text-white">
                      {item.order}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.customer}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.property}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.purchase}
                    </td>

                    <td className="px-5 py-4 font-medium text-[#1F2937] group-hover:text-white">
                      {item.price}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                    <td className="px-5 py-4 text-left">
                      <button className="text-[#9CA3AF] group-hover:text-white">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}