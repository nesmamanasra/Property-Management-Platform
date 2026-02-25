import Container from "../layout/Container";
import { motion } from "framer-motion";
import logoCenter from "../../assets/logo_center_aqari.png";

const stats = [
  { number: "+500", label: "Properties Managed" },
  { number: "+1,200", label: "Contracts Signed" },
  { number: "99%", label: "Data Accuracy" },
  { number: "24/7", label: "Support" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#F5F7FA] dark:bg-[#0B1220]">
      <Container>
        <div className="text-center mb-12">
          <img src={logoCenter} className="h-14 mx-auto mb-4" alt="Aqari" />
          <p className="text-gray-600 dark:text-white/70 mt-3">Property Management - simplified</p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/0"
            >
              <h3 className="text-4xl font-bold text-[#1F3C88]">{s.number}</h3>
              <p className="mt-2 text-gray-600 dark:text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}