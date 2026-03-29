import React from "react";

const features = [
  {
    title: "إدارة العقارات",
    points: [
      "إضافة عدد غير محدود من العقارات مع تنظيم واضح وسريع",
      "تصنيف العقارات حسب النوع مثل شقق، محلات، مكاتب أو أراضٍ",
      "تعديل بيانات العقار بسهولة في أي وقت بدون تعقيد",
      "معرفة حالة كل عقار بشكل مباشر سواء كان متاحًا أو مؤجرًا",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21V11h6v10" />
      </svg>
    ),
  },
  {
    title: "إدارة المستأجرين",
    points: [
      "تخزين بيانات المستأجرين بشكل منظم وسهل الوصول",
      "إدارة العقود وتفاصيلها مع متابعة تواريخ البداية والانتهاء",
      "ربط كل مستأجر بالعقار الخاص به لتسهيل المتابعة",
      "تقليل الفوضى والاعتماد على الملفات أو الجداول المتفرقة",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    title: "متابعة الدفعات",
    points: [
      "تتبع الإيجارات والمستحقات المالية بدقة ووضوح",
      "معرفة الدفعات المسددة والمتأخرة في لحظة واحدة",
      "تسجيل المدفوعات بسهولة مع تحديث الحالة مباشرة",
      "الحصول على رؤية مالية أوضح تساعدك على تنظيم العمل",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
];

export default function WhySection() {
  return (
    <section className="bg-white py-24" dir="rtl">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#1F3C88]/10 px-4 py-1.5 text-sm font-medium text-[#1F3C88]">
            لماذا تختار عقاري؟
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#102A43] md:text-4xl">
            منصة متكاملة تساعدك على إدارة العقارات باحتراف وسهولة
          </h2>

          <p className="mt-4 mb-10 text-base leading-8 text-gray-600 md:text-lg">
            نوفر لك نظامًا عمليًا ينظم العقارات والمستأجرين والدفعات في مكان
            واحد، حتى تتابع كل تفاصيل عملك بشكل أوضح، أسرع، وأكثر احترافية.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F3C88]/10 text-[#1F3C88] transition duration-300 group-hover:scale-105 group-hover:bg-[#1F3C88] group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#102A43]">
                {feature.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {feature.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-7 text-gray-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1F3C88]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-[2px] w-0 bg-[#1F3C88] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-20 rounded-3xl border border-gray-200 bg-[#F8FAFC] px-6 py-10 text-center md:px-12">
          <h3 className="text-2xl font-bold text-[#102A43]">
            كل ما تحتاجه لإدارة أعمالك العقارية من مكان واحد
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
            من متابعة بيانات العقارات إلى تنظيم المستأجرين وتسجيل الدفعات،
            يساعدك عقاري على تقليل الجهد اليومي، رفع مستوى التنظيم، وتوفير رؤية
            أوضح تساعدك على اتخاذ قرارات أسرع وأكثر دقة.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              تنظيم أسرع
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              متابعة أوضح
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              إدارة أسهل
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              قرارات أدق
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}