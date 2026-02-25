import { motion } from "framer-motion";
import Container from "../layout/Container";
import heroDevices from "../../assets/hero_devices.png";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#F5F7FA]">
      
      {/* Soft Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1F3C88]/10 blur-3xl" />
        <div className="absolute top-16 -right-28 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      </div>

      <Container className="grid md:grid-cols-2 items-center gap-12 relative">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h1 className="text-[44px] md:text-[52px] font-extrabold leading-[1.15] text-[#102A43]">
            Effortless & Smart <br />
            Property Management
          </h1>

          <p className="mt-6 text-[17px] text-gray-600 leading-relaxed">
            Manage properties, tenants, contracts,
            <br />
            and payments – all in one platform.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <button className="px-7 py-3 rounded-xl bg-[#1F3C88] text-white shadow-xl hover:opacity-90 transition">
              Start Free Trial
            </button>

            <button className="px-7 py-3 rounded-xl border border-[#E6ECF3] bg-white text-[#102A43] shadow-sm hover:shadow transition flex items-center gap-2">
              Watch Demo <span className="text-xl">›</span>
            </button>
          </div>

          {/* Users trust */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[#1F3C88] font-semibold">
              +1,200
            </span>
            <span className="text-sm text-gray-600">
              users trust us
            </span>

            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-gray-300 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-gray-300 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-gray-300 border-2 border-white" />
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
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