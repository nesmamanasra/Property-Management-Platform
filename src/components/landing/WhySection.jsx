import React from "react";

const features = [
  {
    title: "إدارة العقارات",
    points: [
      "الوسيط يتولى إضافة العقارات وتنظيمها ومتابعتها بشكل كامل",
      "عرض العقارات والتعامل مع الطلبات الواردة دون تدخل منك",
      "متابعة حالة كل عقار سواء كان متاحًا أو مؤجرًا بشكل مستمر",
      "ضمان تشغيل العقارات بأفضل شكل لتحقيق أعلى عائد ممكن",
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
    title: "إدارة المستأجرين والعقود",
    points: [
      "الوسيط يتعامل مع المستأجرين بالكامل من أول تواصل حتى تسليم العقار",
      "إدارة العقود من الإنشاء إلى التجديد ومتابعة تواريخ الانتهاء",
      "ربط كل مستأجر بعقاره لضمان متابعة دقيقة ومنظمة",
      "حل المشاكل اليومية والتواصل مع المستأجرين نيابة عنك",
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
    title: "متابعة الدفعات والتحصيل",
    points: [
      "الوسيط يتابع جميع الدفعات ويضمن تحصيلها في الوقت المحدد",
      "معرفة الدفعات المسددة والمتأخرة دون الحاجة للمتابعة اليدوية",
      "تسجيل المدفوعات وتحديث الحالة بشكل مباشر ودقيق",
      "توفير رؤية مالية واضحة تساعدك على معرفة أداء عقاراتك",
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
    <section className="bg-white py-24" dir="rtl" id="features">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#1F3C88]/10 px-4 py-1.5 text-sm font-medium text-[#1F3C88]">
            لماذا تختار إدارة عقاراتك عبر وسيط؟
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#102A43] md:text-4xl">
            الوسيط يتولى كل شيء عنك... وأنت تتابع بكل راحة
          </h2>

          <p className="mt-4 mb-10 text-base leading-8 text-gray-600 md:text-lg">
            من إدارة العقارات إلى التعامل مع المستأجرين وتنظيم العقود وتحصيل
            الدفعات، يقوم الوسيط العقاري بإدارة كل التفاصيل اليومية نيابة عنك،
            بينما يمنحك النظام رؤية واضحة وتحكمًا كاملاً دون أي تعقيد.
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
            إدارة عقاراتك بدون تعب أو متابعة يومية
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
            مع الوسيط العقاري، لن تحتاج لمتابعة التفاصيل اليومية أو التعامل مع
            المستأجرين أو القلق حول العقود والدفعات. كل شيء يتم إدارته باحتراف،
            بينما تتابع أنت الأداء والنتائج بكل وضوح وسهولة.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              بدون متابعة يومية
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              إدارة كاملة عنك
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              تحصيل مضمون
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              رؤية واضحة
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}