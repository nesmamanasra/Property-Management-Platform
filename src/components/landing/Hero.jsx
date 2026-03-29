import { motion } from "framer-motion";
import { Building2, Users, FileText, ArrowLeft } from "lucide-react";
import Container from "../layout/Container";
import heroDevices from "../../assets/hero_devices.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] pt-14 pb-24" dir="rtl">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-80px] h-72 w-72 rounded-full bg-[#1F3C88]/10 blur-3xl" />
        <div className="absolute top-24 left-[-100px] h-80 w-80 rounded-full bg-[#5B8CFF]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <Container className="relative grid items-center gap-14 md:grid-cols-2">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center md:text-right"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1F3C88]/10 bg-white px-4 py-2 text-sm font-semibold text-[#1F3C88] shadow-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#1F3C88]" />
            منصة ذكية لإدارة العقارات
          </motion.div>

          {/* Title */}
          <h1 className="mt-5 text-[38px] font-extrabold leading-[1.2] text-[#102A43] md:text-[56px]">
            إدارة عقاراتك
            <span className="block bg-gradient-to-l from-[#1F3C88] to-[#3E6FD8] bg-clip-text text-transparent">
              بسهولة واحترافية
            </span>
            من مكان واحد
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-gray-600 md:mr-0 md:ml-auto">
            تابع العقارات والمستأجرين والعقود والمدفوعات من خلال لوحة تحكم
            واحدة تساعدك على تنظيم العمل وتوفير الوقت واتخاذ قرارات أوضح.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <button className="rounded-xl bg-gradient-to-b from-[#1F3C88] to-[#18346F] px-7 py-3.5 text-white font-bold shadow-[0_12px_30px_rgba(31,60,136,0.30)] transition hover:-translate-y-0.5 hover:opacity-95">
              ابدأ الآن مجانًا
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-[#102A43]/10 bg-white px-7 py-3.5 font-semibold text-[#102A43] shadow-sm transition hover:bg-slate-50">
              احجز عرضًا توضيحيًا
              <ArrowLeft size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43]">إدارة العقارات</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                تنظيم كامل للوحدات والعقارات في لوحة واحدة.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43]">إدارة المستأجرين</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                متابعة بيانات المستأجرين والمدفوعات بسهولة.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                <FileText size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43]">إدارة العقود</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                متابعة العقود والاستحقاقات بشكل أوضح وأسرع.
              </p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-0 z-10 hidden rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-xl backdrop-blur md:block"
          >
            <p className="text-xs font-medium text-gray-500">العقود النشطة</p>
            <p className="mt-1 text-xl font-extrabold text-[#102A43]">+1,200</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-0 z-10 hidden rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-xl backdrop-blur md:block"
          >
            <p className="text-xs font-medium text-gray-500">دقة البيانات</p>
            <p className="mt-1 text-xl font-extrabold text-[#102A43]">99%</p>
          </motion.div>

          {/* image wrapper */}
          <div className="relative rounded-[28px] border border-white/60 bg-white/60 p-3 shadow-[0_30px_80px_rgba(16,42,67,0.12)] backdrop-blur-sm">
            <div className="rounded-[22px] bg-gradient-to-b from-white to-slate-100 p-2">
              <motion.img
                src={heroDevices}
                alt="واجهة منصة عقاري"
                className="w-full rounded-[18px] drop-shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}