import Container from "../layout/Container";
import { motion } from "framer-motion";

import property from "../../assets/feature_icon_property.png";
import tenant from "../../assets/feature_icon_tenant.png";
import payment from "../../assets/feature_icon_payment.png";
import dashboard from "../../assets/feature_icon_dashboard.png";

const features = [
  { title: "Property Management", desc: "Track, add, and edit properties", icon: property },
  { title: "Tenant Management", desc: "Manage leases and payments", icon: tenant },
  { title: "Payment Tracking", desc: "Monitor rent payments and dues", icon: payment },
  { title: "Smart Dashboard", desc: "Get real-time insights", icon: dashboard },
];

export default function FeatureCards() {
  return (
    <section id="features" className="pb-20">
      <Container>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-[#0F1A2E] p-6 rounded-2xl shadow-lg border border-[#E6ECF3] dark:border-white/10 text-center"
            >
              <img src={f.icon} className="h-14 mx-auto mb-4" alt={f.title} />
              <h3 className="font-semibold text-[#102A43] dark:text-white">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-white/70 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}