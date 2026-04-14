import { Building2, FileText, ShieldCheck, Headphones } from "lucide-react";

const stats = [
  {
    value: "+500",
    label: "عقار تتم إدارته بكفاءة عالية",
    icon: Building2,
  },
  {
    value: "+300",
    label: "عقد تم إنجازه بكل سلاسة",
    icon: FileText,
  },
  {
    value: "99%",
    label: "دقة في البيانات واتخاذ القرار",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "دعم مستمر في أي وقت تحتاجه",
    icon: Headphones,
  },
];

export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFD] to-white py-14 md:py-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-[8%] h-56 w-56 rounded-full bg-[#1F3C88]/[0.05] blur-3xl" />
        <div className="absolute bottom-0 left-[8%] h-64 w-64 rounded-full bg-[#3E6FD8]/[0.05] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#1F3C88]/10 bg-[#1F3C88]/5 px-4 py-1.5 text-[12px] font-semibold text-[#1F3C88] md:text-[13px]">
            مؤشرات المنصة
          </span>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#102A43] md:text-4xl">
            أرقام تعكس قوة منصة عقاري
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#486581] md:text-base">
            تجربة متكاملة تساعدك على إدارة العقارات والعقود والمستأجرين بطريقة
            أكثر وضوحًا واحترافية من مكان واحد.
          </p>
        </div>

        {/* Premium Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={value}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/75 p-6 text-center shadow-[0_14px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]"
            >
              {/* top gradient line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#1F3C88] via-[#3E6FD8] to-[#7AA2FF]" />

              {/* glow orb */}
              <div className="absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#1F3C88]/5 blur-2xl transition duration-300 group-hover:bg-[#1F3C88]/10" />

              <div className="relative">
                {/* icon */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-[#1F3C88]/10 to-[#3E6FD8]/10 text-[#1F3C88] shadow-inner">
                  <Icon size={22} />
                </div>

                {/* value */}
                <div className="mt-5 text-3xl font-extrabold tracking-tight text-[#102A43] md:text-4xl">
                  {value}
                </div>

                {/* separator */}
                <div className="mx-auto my-4 h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* label */}
                <p className="text-sm font-medium leading-7 text-[#17365d] md:text-[15px]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}