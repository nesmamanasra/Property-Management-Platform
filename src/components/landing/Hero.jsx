import { motion } from "framer-motion";
import Container from "../layout/Container";
import heroDevices from "../../assets/hero_devices.png";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#F5F7FA] pt-12 pb-20"
    >
      {/* Background Shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1F3C88]/10 blur-3xl" />
        <div className="absolute top-16 -right-28 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-12 md:grid-cols-2">

        {/* TEXT - RIGHT */}
       <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35 }}
  className="text-center md:text-right"
>
  <h1 className="text-[40px] md:text-[52px] font-extrabold leading-[1.2] text-[#102A43]">
    إدارة العقارات بسهولة <br />
    وذكاء في منصة واحدة
  </h1>

  <p className="mt-6 text-[17px] text-gray-600 leading-relaxed">
    قم بإدارة العقارات والمستأجرين والعقود
    <br />
    والمدفوعات بكل سهولة من مكان واحد.
  </p>

  {/* Buttons */}
  <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-end md:flex-row-reverse">
    <button className="px-7 py-3.5 rounded-lg text-white font-bold bg-gradient-to-b from-[#1F3C88] to-[#18346F] shadow-[0_10px_22px_rgba(31,60,136,0.30)] hover:opacity-95 transition">
      ابدأ الآن مجاناً
    </button>

    <button className="px-7 py-3 rounded-xl border border-[#E6ECF3] bg-white text-[#102A43] font-bold shadow-sm hover:shadow transition flex items-center gap-2">
      شاهد العرض <span className="text-xl">‹</span>
    </button>
  </div>

  {/* Users trust */}
 <div className="mt-6 flex items-center gap-3 justify-center md:justify-end">

  {/* الصور */}
  <div className="flex -space-x-2">
    <div className="h-7 w-7 rounded-full bg-gray-300 border-2 border-white" />
    <div className="h-7 w-7 rounded-full bg-gray-300 border-2 border-white" />
    <div className="h-7 w-7 rounded-full bg-gray-300 border-2 border-white" />
  </div>

  {/* الرقم */}
  <span className="text-[#1F3C88] font-semibold">+1,200</span>

  {/* النص */}
  <span className="text-sm text-gray-600">مستخدم يثق بنا</span>

</div>
</motion.div>

        {/* IMAGE - LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <motion.img
            src={heroDevices}
            alt="Dashboard preview"
            className="w-full drop-shadow-2xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </Container>
    </section>
  );
}